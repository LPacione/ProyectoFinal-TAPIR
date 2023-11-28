import { Account } from '../main/modules/Account.mjs';
import { CheckAccount } from '../main/modules/CheckAccount.mjs';
import { TestingInformation } from './TestingInformation.mjs';
import { TestingCore } from './TestingCore.mjs';

export class TestingSetup {
    static setup() {
        let mapObjectsToCallSequence = null;
        let mapMethodsToSymbols = null;
        let regularExpression = null;
        let matcher = null;

        TestingCore.mapClassToTestingInformation = new Map();

        mapObjectsToCallSequence = new Map();

        mapMethodsToSymbols = new Map();
        mapMethodsToSymbols.set("constructor", "c");
        mapMethodsToSymbols.set("verify", "v");
        mapMethodsToSymbols.set("deposit", "d");
        mapMethodsToSymbols.set("withdraw", "w");
        mapMethodsToSymbols.set("close", "x");

        regularExpression = /^(c|$)(v|$)(d|$)(d|w|$)*(x|$)$/;

        matcher = regularExpression.exec("");

        const tiAccount = new TestingInformation(Account.name, mapObjectsToCallSequence, mapMethodsToSymbols, regularExpression, matcher, true);
        TestingCore.mapClassToTestingInformation.set(Account.name, tiAccount);

        mapObjectsToCallSequence = null;
        mapMethodsToSymbols = null;
        regularExpression = null;
        matcher = null;

        mapMethodsToSymbols = new Map();
        mapMethodsToSymbols.set("constructor", "c");
        mapMethodsToSymbols.set("verify", "v");
        mapMethodsToSymbols.set("deposit", "d");
        mapMethodsToSymbols.set("withdraw", "w");
        mapMethodsToSymbols.set("close", "x");

        regularExpression = /^(c|$)(v|$)(d|$)(d|w|$)*(x|$)$/; 

        matcher = regularExpression.exec("");

        const tiCheckAccount = new TestingInformation(CheckAccount.name, mapObjectsToCallSequence, mapMethodsToSymbols, regularExpression, matcher, false);
        TestingCore.mapClassToTestingInformation.set(CheckAccount.name, tiCheckAccount);
    }
}