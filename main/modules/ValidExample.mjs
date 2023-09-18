import {Account} from './Account.mjs';

export function validExample(){

    const a1 = new Account("a1");
    const a2 = new Account("a2");

    a1.verify();
		
	a1.deposit(1000);
	a1.deposit(4000);
	a1.withdraw(3000);
		
	a1.close();
		
	a2.verify();
		
	a2.deposit(1000);
	a2.deposit(2000);
	a2.deposit(1000);
	a2.deposit(1000);
		
	a2.withdraw(5000);
		
	a2.close();
};
