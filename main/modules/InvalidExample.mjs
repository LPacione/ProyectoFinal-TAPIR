import {Account} from './Account.mjs';

export function invalidExample(){

  const a3 = new Account("a3");

  a3.verify();
  a3.withdraw(3000);
  a3.deposit(1000);
  a3.deposit(4000);
  a3.withdraw(3000);
  a3.close();
};

