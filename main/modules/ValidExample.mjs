import { Account } from './Account.mjs';

export function validExample() {

	let a1 = new Account("a1");
	a1.verify();
	a1.deposit(1000);
	a1.deposit(4000);
	a1.withdraw(3000);
	a1.close();
};
