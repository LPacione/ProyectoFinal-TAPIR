import {Account} from '../main/modules/Account.mjs';
import {CheckAccount} from '../main/modules/CheckAccount.mjs';
import { TestingInformation } from './TestingInformation.mjs';
import { TestingCore } from './TestingCore.mjs';

export class TestingSetup {
    static setup() {
        console.log("In TestingSetup - Setup method")
        let mapObjectsToCallSequence = null;
        let mapMethodsToSymbols = null;
        let regularExpression = null;
        let matcher = null;

        // Especificación de la clase de prueba
        TestingCore.mapClassToTestingInformation = new Map();

        mapObjectsToCallSequence = new Map();

        mapMethodsToSymbols = new Map();
        mapMethodsToSymbols.set("constructor", "c");
        mapMethodsToSymbols.set("verify", "v");
        mapMethodsToSymbols.set("deposit", "d");
        mapMethodsToSymbols.set("withdraw", "w");
        mapMethodsToSymbols.set("close", "x");

        // Definición de la expresión regular
        regularExpression = /cvd(d|w)*x/;

        // Inicialización del controlador de expresiones regulares
        matcher = regularExpression.exec("");

        // Toda la información relacionada con cómo se prueba la clase Account se almacena en una instancia de TestingInformation
        const tiAccount = new TestingInformation(Account.name, mapObjectsToCallSequence, mapMethodsToSymbols, regularExpression, matcher, true);
        TestingCore.mapClassToTestingInformation.set(Account.name, tiAccount);

        // console.log(tiAccount)
        // console.log(TestingCore)
        // console.log("------------") 
        //return [TestingCore, mapObjectsToCallSequence, mapMethodsToSymbols, regularExpression, matcher, mapClassToTestingInformation]

        mapObjectsToCallSequence = null;
        mapMethodsToSymbols = null;
        regularExpression = null;
        matcher = null;

        // Configuración de prueba para la clase CheckAccount
        // Definición de los métodos y sus símbolos correspondientes
        // const accountInstanceCheckAccount = new CheckAccount();

        mapMethodsToSymbols = new Map();
        mapMethodsToSymbols.set("constructor", "c");
        mapMethodsToSymbols.set("verify", "v");
        mapMethodsToSymbols.set("deposit", "d");
        mapMethodsToSymbols.set("withdraw", "w");
        mapMethodsToSymbols.set("close", "x");

        // Definición de la expresión regular
        regularExpression = /cvd(d|w)*x/;

        // Inicialización del controlador de expresiones regulares
        matcher = regularExpression.exec("");

        // Toda la información relacionada con cómo se prueba la clase CheckAccount se almacena en una instancia de TestingInformation
        const tiCheckAccount = new TestingInformation(CheckAccount.name, mapObjectsToCallSequence, mapMethodsToSymbols, regularExpression, matcher, false);
        TestingCore.mapClassToTestingInformation.set(CheckAccount.name, tiCheckAccount);

        // console.log(tiCheckAccount)
        // console.log(TestingCore)
        // console.log("------------")
    }
}