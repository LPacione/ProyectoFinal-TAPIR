export class CheckAccount {

    amount;
    verified;

    constructor() {
        this.amount = 0;
        this.verified = false;
    }
    
    verify(){
        this.verified = true;
    }

    isVerify(){
        return this.verified;
    }

    deposit(amount){
        if(this.isVerify()){
            this.amount += amount;
        }
    }

    withdraw(amount){ 
        if(this.isVerify()){
            this.amount -= amount;
        }
    }

    close(){
        this.amount = 0;
        this.verified = false;
    }

}