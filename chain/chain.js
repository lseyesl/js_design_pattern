var MoneyStack = function(billSize){
	this.billSize = billSize;
	this.next = null;
}

MoneyStack.prototype = {
	withdraw:function(amount){
		var numOfBills = Math.floor(amount / this.billSize);
		if(numOfBills > 0){
			this._ejectMoney(numOfBill);
			amount = amount - (this.billSize * numOfBills);
		}
		amount > 0 && this.next && this.next.withdraw(amount);
	},
	setNextStack:function(){
		this.next = stack;
	},
	_ejectMoney:function(numOfBills){
		console.log(numOfBills + ' $ '+ this.billSize+ ' out');
	}
}

var ATM = function(){
	var stack100 = new MoneyStack(100),
	    stack50 = new MoneyStack(50),
	    stack20 = new MoneyStack(20),
	    stack10 = new MoneyStack(10),
	    stack5 = new MoneyStack(5),
	    stack1 = new MoneyStack(1);

	stack100.setNextStack(stack50);
	stack50.setNextStack(stack20);
	stack20.setNextStack(stack10);
	stack10.setNextStack(stack5);
	stack5.setNextStack(stack1);

	this.moneyStacks = stack100;
}

ATM.prototype.withdraw = function(amount){
	this.moneyStacks.withdraw(amount);
}

var atm = new ATM();
atm.withdraw(186);

atm.withdraw(72);


