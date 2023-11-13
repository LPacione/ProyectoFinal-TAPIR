import { aop, hookName, createHook, unAop } from 'to-aop';
import { Account } from '../main/modules/Account.mjs';
import { CheckAccount } from '../main/modules/CheckAccount.mjs';

export class cualquierMethodAccount {
  firstTime = false;
  constructorBefore;
  constructorAfter;
  classHookAfter;

  static init(){
    console.log("Ingrese al init")
this.constructorBefore = createHook(
  hookName.beforeMethod,
  'construct',
  ({ target, object, property, context, args, meta }) => {
      if (!this.firstTime) {
          console.log("First");
          console.log("Target: " + target.name); // Nombre de la clase
          console.log("Property: " + property); // Nombre de la función
          console.log("-----");
          this.firstTime = true;
      }
  }
);

this.constructorAfter = createHook(
    hookName.afterMethod,
    'constructor',
    ({ target, object, property, context, args, meta }) => {
        meta.startTime = performance.now();
        console.log("Target: " + target.name); // Nombre de la clase
        console.log("Property: " + property); // Nombre de la función
        console.log("-----");
    }
  )

this.classHookAfter = createHook(
    hookName.afterMethod,
    '',
    ({ target, object, property, context, args, payload, meta }) => {
      console.log("Target: "+target.name); //Nombre de la clase
      console.log("Property: "+property); //Nombre de la función
      console.log("-----")
    }
  );


let HookedAccountBefore = aop(Account, this.constructorBefore, { constructor: true })
new HookedAccountBefore({ some: 'settings' })

let HookedAccountAfter = aop(Account, this.constructorAfter, { constructor: true })
new HookedAccountAfter({ some: 'settings' })

aop(
  Account,
  Object.assign({}, this.classHookAfter)
); // bind hook to class

console.log("Salgo del init")
  }

}


