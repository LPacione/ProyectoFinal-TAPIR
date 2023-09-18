var aspect = require('aspect-js');

// Define un objeto genérico
var myObject = {
    sayGoodbye: function () {
        console.log("Goodbye world");
    },
    saySomething: function () {
        console.log("Say something");
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







