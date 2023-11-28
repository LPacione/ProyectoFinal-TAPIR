export class Account {
    amount;
    name;
    verified;

    constructor(name) {
        this.amount = 0;
        this.verified = false;
        this.name = name;
    }

    verify() {
        this.verified = true;
    }

    isVerify() {
        return this.verified;
    }

    deposit(amount) {
        if (!this.verified) {
            this.amount += amount;
        }
    }

    withdraw(amount) {
        if (!this.verified) {
            this.amount -= amount;
        }
    }

    getAmount() {
        return this.amount;
    }

    getName() {
        return this.name;
    }

    close() {
        this.amount = 0;
        this.verified = false;
    }

}
