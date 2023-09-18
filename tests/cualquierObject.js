import aspect from 'aspect-js';

// Función para agregar un aspecto a cualquier objeto y método
function applyAspectToObject(obj) {
    // Itera sobre todas las propiedades del objeto
    for (var methodName in obj) {
        if (typeof obj[methodName] === 'function') {
            // Utiliza una función de cierre para capturar el valor de methodName
            (function (methodName) {
                aspect.before(obj, methodName, function () {
                    //Funcion
                    console.log('Hello world before ' + methodName);
                });
            })(methodName);
        }
    }
}


// Objeto de ejemplo 1
var myObject1 = {
    sayGoodbye1: function () {
        console.log("Goodbye world1");
    },
    saySomething1: function () {
        console.log("Say something1");
    }
};

// Objeto de ejemplo 2
var myObject2 = {
    sayGoodbye2: function () {
        console.log("Goodbye world2");
    },
    saySomething2: function () {
        console.log("Say something2");
    }
};

// Aplica el aspecto a ambos objetos
applyAspectToObject(myObject1);
applyAspectToObject(myObject2);

for (let step = 0; step < 1; step++) {
    myObject1.sayGoodbye1();
    myObject2.sayGoodbye2();
    myObject1.saySomething1();
    myObject2.saySomething2();
}
