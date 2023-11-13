import { TestingSetup } from "./TestingSetup.mjs";
import { TestingCore } from "./TestingCore.mjs";
import { validExample } from "../main/modules/ValidExample.mjs";
import { cualquierMethodAccount } from "../tests/cualquierMethodAccount.mjs";


// console.log("Test")
// console.log("-----")
// let testingCore = new TestingCore()

// cualquierMethodAccount.init();
TestingCore.init()
validExample()
// const account = new Account('Luciano');
// const accountBis = new Account('Ezequiel')
// account.verify(); 
// account.isVerify();
// account.deposit(200);
// account.withdraw(100);
// account.getAmount();
// account.close()

