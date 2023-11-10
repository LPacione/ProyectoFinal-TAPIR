import { aop, hookName, createHook, unAop } from 'to-aop';
import { Account } from '../main/modules/Account.mjs';
import { CheckAccount } from '../main/modules/CheckAccount.mjs';


let firstTime = false;

// const constructorBefore = createHook(
//     hookName.beforeMethod,
//     'constructor',
//     ({ target, object, property, context, args, meta }) => {
//       console.log("Target: "+target.name); //Nombre de la clase
//       console.log("Property: "+property); //Nombre de la función
//       console.log("-----")
//     }
// )

// hookedAccount = aop(Account, constructorBefore, { constructor: true })
// new hookedAccount({ some: 'settings' })

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
      }
  }
);

const constructorAfter = createHook(
    hookName.afterMethod,
    'constructor',
    ({ target, object, property, context, args, meta }) => {
        meta.startTime = performance.now();
        console.log("Target: " + target.name); // Nombre de la clase
        console.log("Property: " + property); // Nombre de la función
        console.log("-----");
    }
  )

const classHookAfter = createHook(
    hookName.afterMethod,
    '',
    ({ target, object, property, context, args, payload, meta }) => {
      console.log("Target: "+target.name); //Nombre de la clase
      console.log("Property: "+property); //Nombre de la función
      console.log("-----")
    }
  );

  
//   let HookedEffectiveConfigSelector = aop(Account, constructorAfter, { constructor: true })

//   new HookedEffectiveConfigSelector({ some: 'settings' })
// const classHookAfter = createHook(
//     hookName.afterMethod,
//     '',
//     ({ target, object, property, context, args, payload, meta }) => {
//         meta.startTime = performance.now();
//         console.log("Target: "+target.name); //Nombre de la clase
//         //console.log("Object: "+object); //Devuelve lo mismo que object
//         console.log("Property: "+property); //Nombre de la función
//         //console.log("Context: "+context); //[object Object]
//         //console.log("Args: "+args); //[object Object]
//         //console.log("Meta: "+meta) //[object Object]
//     }
//   );

// const constructorAfter = createHook(
//     hookName.afterMethod,
//     'constructor',
//     ({ target, object, property, context, args, meta }) => {
//         meta.startTime = performance.now();
//         console.log("Target: "+target.name); //Nombre de la clase
//         //console.log("Object: "+object); //Devuelve lo mismo que object
//         console.log("Property: "+property); //Nombre de la función - typeof = string
//         //console.log("Context: "+context); //[object Object]
//         //console.log("Args: "+args); //[object Object]
//         //console.log("Meta: "+meta) //[object Object]
//     }
//   )

//   const constructorBefore = createHook(
//     hookName.beforeMethod,
//     'EffectiveConfigSelector',
//     ({ target, object, property, context, args, meta }) => {
//       ow(args[0], 'settingsObj', ow.object.partialShape({
//         root: ow.string,
//         mod_file_folder: ow.string
//       }))
//     }
//   )

let HookedAccountBefore = aop(Account, constructorBefore, { constructor: true })
new HookedAccountBefore({ some: 'settings' })

let HookedAccountAfter = aop(Account, constructorAfter, { constructor: true })
new HookedAccountAfter({ some: 'settings' })

aop(
  Account,
  Object.assign({}, classHookAfter)
); // bind hook to class

const account = new Account('Luciano');
account.verify(); 
account.isVerify();
account.deposit(200);
account.withdraw(100);
account.getAmount();
account.close()

const accountE = new Account('Ezequiel');
accountE.verify(); 
accountE.isVerify();
accountE.deposit(200);
accountE.withdraw(100);
accountE.getAmount();
accountE.close()

