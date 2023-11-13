import { aop, hookName, createHook, unAop } from 'to-aop';
import { Account } from '../main/modules/Account.mjs';
import { TestingSetup } from './TestingSetup.mjs';
import { TestingInformation } from './TestingInformation.mjs';

export class TestingCore {
    static mapClassToTestingInformation = new Map();
    static classHookAfter;
    static constructorBefore;
    static constructorAfter;
    static firstTime = false;
    static regex = '';

    static init(){
        console.log("In TestingCore - Constructor")

        this.classHookAfter = createHook(
          hookName.afterMethod,
          '',
          ({ target, object, property, context, args, payload, meta }) => {
            // console.log("Target: "+target.name); //Nombre de la clase
            // console.log("Property: "+property); //Nombre de la función
            // console.log("-----")
            console.log("Before "+property)
            this.recoverData(target, property);
          }
        );
        
        this.constructorBefore = createHook(
            hookName.beforeMethod,
            'construct',
            ({ target, object, property, context, args, meta }) => {
                if (!this.firstTime) {
                    // console.log("First");
                    // console.log("Target: " + target.name); // Nombre de la clase
                    // console.log("Property: " + property); // Nombre de la función
                    // console.log("-----");
                    console.log("First: "+this.firstTime+". Before constructor")
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
                //   console.log("Target: " + target.name); // Nombre de la clase
                //   console.log("Property: " + property); // Nombre de la función
                //   console.log("-----");
                console.log("First: "+this.firstTime+". After constructor")
                this.recoverData(target, property);
              }
            )
          

          
          
          let HookedAccountBefore = aop(Account, this.constructorBefore, { constructor: true })
          new HookedAccountBefore({ some: 'settings' })
          
          let HookedAccountAfter = aop(Account, this.constructorAfter, { constructor: true })
          new HookedAccountAfter({ some: 'settings' })
          
          aop(
            Account,
            Object.assign({}, this.classHookAfter)
          ); // bind hook to class
    }

    static recoverData(className, functionName){
        // console.log("Recover Data in "+property)
        // this.regex = this.regex+''+Array.from(property)[0]+''
        // console.log("Regex: "+this.regex)
        if(this.mapClassToTestingInformation[className]){
          ti = mapClassToTestingInformation[className]

        }
        
    }

 }
