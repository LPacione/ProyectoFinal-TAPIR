import { aop, hookName, createHook, unAop } from 'to-aop';
import { Account } from '../main/modules/Account.mjs';
import { TestingSetup } from './TestingSetup.mjs';
import { TestingInformation } from './TestingInformation.mjs';
import objectHash from 'object-hash';

export class TestingCore {
  static mapClassToTestingInformation = new Map();
  static classHookAfter;
  static constructorBefore;
  static constructorAfter;
  static firstTime = false;
  static regex = '';
  static ti;
  static instance;

  static init() {

    this.classHookAfter = createHook(
      hookName.afterMethod,
      '',
      ({ target, object, property, context, args, payload, meta }) => {
        this.recoverData(target.name, property);
      }
    );

    this.constructorBefore = createHook(
      hookName.beforeMethod,
      'constructor',
      ({ target, object, property, context, args, meta }) => {
        if (!this.firstTime) {
          this.firstTime = true;
          TestingSetup.setup();
        }
      }
    );

    this.constructorAfter = createHook(
      hookName.afterMethod,
      'constructor',
      ({ target, object, property, context, args, meta }) => {
        meta.startTime = performance.now();
        this.recoverData(target.name, property);
      }
    )

    let HookedAccountBefore = aop(Account, this.constructorBefore, { constructor: true })
    new HookedAccountBefore({ some: 'settings' })

    let HookedAccountAfter = aop(Account, this.constructorAfter, { constructor: true })
    new HookedAccountAfter({ some: 'settings' })

    aop(
      Account,
      Object.assign({}, this.classHookAfter)
    );
  }

  static recoverData(className, functionName) {
    if (this.mapClassToTestingInformation.has(className)) {
      const { targetClass, mapObjectsToCallSequence, mapMethodsToSymbols, regularExpression, matcher, abort } = this.mapClassToTestingInformation.get(className)
      this.ti = new TestingInformation(targetClass, mapObjectsToCallSequence, mapMethodsToSymbols, regularExpression, matcher, abort)

      const objectHashCode = objectHash(this.classHookAfter)
      if (!this.ti.getMapObjectsToCallSequence().has(objectHashCode)) {
        this.ti.getMapObjectsToCallSequence().set(objectHashCode, "")
      }

      const methodSymbol = this.ti.getMapMethodsToSymbols().get(functionName)

      if (this.ti.getMapMethodsToSymbols().has(functionName)) {
        const newSequence = this.ti.getMapObjectsToCallSequence().get(objectHashCode).concat(methodSymbol)
        this.ti.getMapObjectsToCallSequence().set(objectHashCode, newSequence)

        this.ti.setMatcher(newSequence);

        const isMatching = this.ti.getMatcher().test(newSequence)

        if (!isMatching) {
          console.log("-------------------------------");
          console.log("---       ERROR FOUND       ---");
          console.log("-------------------------------");
          console.log("Class: " + className);
          console.log("Object Code: " + objectHashCode);
          console.log("Method Executed: " + functionName);
          console.log("Regular Expression: " + this.ti.getRegularExpression());
          console.log("Execution Sequence: " + newSequence);
          if (this.ti.getAbort()) {
            console.log("-------------------------------");
            console.log("-----  SYSTEM ABORTING... -----");
            console.log("-------------------------------");
            process.exit(0)
          } else {
            console.log("-------------------------------");
            console.log("--  CONTINUING EXECUTION... ---");
            console.log("-------------------------------");
            console.log();
          }
        }
      }


    }

  }

}
