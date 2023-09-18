export class Account {
    amount;
    name;
    isVerified;

    constructor(name) {
        this.amount = 0;
        this.isVerified = false;
        this.name = name;
        console.log("Account "+this.name+" created");
    }

    verify(){
        this.isVerified = true;
        console.log("Account "+this.name+" verified");
    }

    isVerify(){
        return this.isVerified;
    }

    deposit(amount){
        if(this.isVerify()){
            this.amount += amount;
            console.log("Deposit "+amount+" successful in "+this.name);
        }
    }

    withdraw(amount){ 
        if(this.isVerify()){
            this.amount -= amount;
            console.log("Withdraw "+amount+" successful in "+this.name);
        }
    }

    getAmount(){
        console.log("Amount: "+this.amount);
        return this.amount;
    }

    close(){
        this.amount = 0;
        this.isVerified = false;
        console.log("Account "+this.name+" closed");
    }

}
