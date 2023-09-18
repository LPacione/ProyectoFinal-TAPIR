import {Account} from '../main/modules/Account.mjs';
import {CheckAccount} from '../main/modules/CheckAccount.mjs';
import { TestingInformation } from './TestingInformation.mjs';

class TestingSetup {
    static setup() {
        mapObjectsToCallSequence = null;
        mapMethodsToSymbols = null;
        regularExpression = null;
        matcher = null;

        // Especificación de la clase de prueba
        TestingCore.mapClassToTestingInformation = new Map();

        // Configuración de prueba para la clase Account
        // Definición de los métodos y sus símbolos correspondientes
        mapObjectsToCallSequence = new Map();
        mapMethodsToSymbols = new Map();
        mapMethodsToSymbols.set("Account.<init>", "c");
        mapMethodsToSymbols.set("Account.verify", "v");
        mapMethodsToSymbols.set("Account.deposit", "d");
        mapMethodsToSymbols.set("Account.withdraw", "w");
        mapMethodsToSymbols.set("Account.close", "x");

        // Definición de la expresión regular
        regularExpression = /cvd(d|w)*x/;

        // Inicialización del controlador de expresiones regulares
        matcher = regularExpression.exec("");

        // Toda la información relacionada con cómo se prueba la clase Account se almacena en una instancia de TestingInformation
        const ti = new TestingInformation("main.Account", mapObjectsToCallSequence, mapMethodsToSymbols, regularExpression, matcher, true);
        TestingCore.mapClassToTestingInformation.set("main.Account", ti);

        mapObjectsToCallSequence = null;
        mapMethodsToSymbols = null;
        regularExpression = null;
        matcher = null;

        // Configuración de prueba para la clase CheckAccount
        // Definición de los métodos y sus símbolos correspondientes
        mapObjectsToCallSequence = new Map();
        mapMethodsToSymbols = new Map();
        mapMethodsToSymbols.set("main.CheckAccount.<init>", "c");
        mapMethodsToSymbols.set("main.CheckAccount.verify", "v");
        mapMethodsToSymbols.set("main.CheckAccount.deposit", "d");
        mapMethodsToSymbols.set("main.CheckAccount.withdraw", "w");
        mapMethodsToSymbols.set("main.CheckAccount.close", "x");

        // Definición de la expresión regular
        regularExpression = /cvd(d|w)*x/;

        // Inicialización del controlador de expresiones regulares
        matcher = regularExpression.exec("");

        // Toda la información relacionada con cómo se prueba la clase CheckAccount se almacena en una instancia de TestingInformation
        const tiCheckAccount = new TestingInformation("main.CheckAccount", mapObjectsToCallSequence, mapMethodsToSymbols, regularExpression, matcher, false);
        TestingCore.mapClassToTestingInformation.set("main.CheckAccount", tiCheckAccount);
    }
}