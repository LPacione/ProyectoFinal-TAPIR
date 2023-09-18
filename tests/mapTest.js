import {Account} from '../main/modules/Account.mjs';


let mapMethodsToSymbols = new Map();
mapMethodsToSymbols.set("Account.<init>", "c");
mapMethodsToSymbols.set("Account.verify", "v");
mapMethodsToSymbols.set("Account.deposit", "d");
mapMethodsToSymbols.set("Account.withdraw", "w");
mapMethodsToSymbols.set("Account.close", "x");

console.log(mapMethodsToSymbols)