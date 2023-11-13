import { aop, hookName, createHook, unAop } from 'to-aop';
import { Account } from '../main/modules/Account.mjs';
import { TestingSetup } from './TestingSetup.mjs';

export class TestingCore {
    static mapClassToTestingInformation = new Map();
    hookedAccount;
    constructorBefore;
    firstTime = false;

    firstCall = false;

    static first(){

        console.log("In First method")

        const constructorBefore = createHook(
            hookName.beforeMethod,
            'construct',
            ({ target, object, property, context, args, meta }) => {
                if (!firstTime) {
                    console.log("First");
                    console.log("Target: " + target.name); // Nombre de la clase
                    console.log("Property: " + property); // Nombre de la función
                    console.log("-----");
                    firstTime = true;
                    TestingSetup.setup();
                }
            }
          );

        const constructorAfter = createHook(
            hookName.afterMethod,
            'constructor',
            ({ target, object, property, context, args, meta }) => {
                console.log("Target: "+target.name); //Nombre de la clase
                console.log("Property: "+property); //Nombre de la función
                console.log("-----")
            }
        );

        let HookedAccountBefore = aop(Account, constructorBefore, { constructor: true })
        new HookedAccountBefore({ some: 'settings' })
        
        let HookedAccountAfter = aop(Account, constructorAfter, { constructor: true })
        new HookedAccountAfter({ some: 'settings' })

          
        const classHookAfter = createHook(
              hookName.afterMethod,
              '',
              ({ target, object, property, context, args, payload, meta }) => {
                console.log("Target: "+target.name); //Nombre de la clase
                console.log("Property: "+property); //Nombre de la función
                console.log("-----")
              }
        );

        aop(Account,Object.assign({}, classHookAfter)); // bind hook to class
    }


    // static second(){

    // }
    // static afterExecution(thisJoinPointStaticPart, thisJoinPoint) {
    //     const className = `class ${thisJoinPointStaticPart.getSignature().getDeclaringTypeName()}`;
        
    //     if (TestingCore.mapClassToTestingInformation.has(className)) {
    //         const ti = TestingCore.mapClassToTestingInformation.get(className);
    //         const objectHashCode = thisJoinPoint.getThis().hashCode();
            
    //         if (!ti.getMapObjectsToCallSequence().has(objectHashCode)) {
    //             ti.getMapObjectsToCallSequence().set(objectHashCode, "");
    //         }
            
    //         const methodName = `${thisJoinPoint.getSignature().getDeclaringTypeName()}.${thisJoinPoint.getSignature().getName()}`;
    //         const methodSymbol = ti.getMapMethodsToSymbols().get(methodName);
            
    //         if (ti.getMapMethodsToSymbols().has(methodName)) {
    //             const newSequence = ti.getMapObjectsToCallSequence().get(objectHashCode) + methodSymbol;
    //             ti.getMapObjectsToCallSequence().set(objectHashCode, newSequence);
                
    //             ti.getMatcher().reset(newSequence);
    //             const isMatching = ti.getMatcher().matches() || ti.getMatcher().hitEnd();
                
    //             if (!isMatching) {
    //                 console.log("-------------------------------");
    //                 console.log("---       ERROR FOUND       ---");
    //                 console.log("-------------------------------");
    //                 console.log("Class: " + className);
    //                 console.log("Object Code: " + objectHashCode);
    //                 console.log("Method Executed: " + methodName);
    //                 console.log("Regular Expression: " + ti.getRegularExpression());
    //                 console.log("Execution Sequence: " + newSequence);
                    
    //                 if (ti.getAbort()) {
    //                     console.log("-------------------------------");
    //                     console.log("-----  SYSTEM ABORTING... -----");
    //                     console.log("-------------------------------");
    //                     process.exit(0);
    //                 } else {
    //                     console.log("-------------------------------");
    //                     console.log("--  CONTINUING EXECUTION... ---");
    //                     console.log("-------------------------------");
    //                     console.log();
    //                 }
    //             }
    //         }
    //     }
    // }
 }