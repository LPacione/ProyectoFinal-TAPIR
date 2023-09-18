class CheckAccount {

    amount;
    verify;

    constructor() {
        this.amount = 0;
        this.verify = false;
    }
    
    verify(){
        this.verify = true;
    }

    isVerify(){
        return this.verify;
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
        this.verify = false;
    }

}