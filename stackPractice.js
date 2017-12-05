/* Interface: Stacks

1. Constructor Function
    - Storage

2. Methods
    - push(value)
    - pop()
    - size() */

var Stack = function() {
	this.storage = '';
};

Stack.prototype.push = function(val) {
	this.storage += val + '-';
};

Stack.prototype.pop = function() {
	this.storage = this.storage.split('-').pop();
};

Stack.prototype.size = function() {
	console.log(this.storage.split('-').length - 1);
};

var myWeeklyMenu = new Stack();

myWeeklyMenu.push('RedBeans');
