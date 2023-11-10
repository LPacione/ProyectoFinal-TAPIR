import aspect from 'aspect-js';

// Define un objeto genérico
var myObject = {
    amount : 100,
    sayGoodbye: function () {
        console.log("Goodbye world "+this.amount);
    },
    saySomething: function () {
        console.log("Say something "+this.amount);
    }
};

// Define un prototipo que se aplicará a todos los métodos del objeto
Object.keys(myObject).forEach(function (methodName) {
    aspect.before(myObject, methodName, function () {
        console.log('Hello world before ' + methodName);
    });
});

for (let step = 0; step < 2; step++) {
    myObject.sayGoodbye();
    myObject.saySomething();
}
