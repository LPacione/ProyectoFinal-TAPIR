export class TestingInformation{
    targetClass;
    mapObjectsToCallSequence = new Map()
    mapMethodsToSymbols = new Map();
    regularExpression = null;
    matcher = null;
    abort = true;

    constructor(targetClass, mapObjectsToCallSequence, mapMethodsToSymbols, regularExpression, matcher, abort) {
        console.log("Ingrese al constructor de TestingInfo")
        this.targetClass = targetClass;
        this.mapObjectsToCallSequence = mapObjectsToCallSequence;
        this.mapMethodsToSymbols = mapMethodsToSymbols;
        this.regularExpression = regularExpression;
        this.matcher = matcher || (this.regularExpression ? new RegExp(this.regularExpression) : null);
        this.abort = abort;
    }

    getTargetClass() {
        return this.targetClass;
    }

    setTargetClass(targetClass) {
        this.targetClass = targetClass;
    }

    getMapObjectsToCallSequence() {
        return this.mapObjectsToCallSequence;
    }

    setMapObjectsToCallSequence(mapObjectsToCallSequence) {
        this.mapObjectsToCallSequence = mapObjectsToCallSequence || new Map();
    }

    getMapMethodsToSymbols() {
        return this.mapMethodsToSymbols;
    }

    setMapMethodsToSymbols(mapMethodsToSymbols) {
        this.mapMethodsToSymbols = mapMethodsToSymbols || new Map();
    }

    getRegularExpression() {
        return this.regularExpression;
    }

    setRegularExpression(regularExpression) {
        this.regularExpression = regularExpression || null;
    }

    getMatcher() {
        return this.matcher;
    }

    setMatcher(matcher) {
        this.matcher = matcher || null;
    }

    isAbort() {
        return this.abort;
    }

    setAbort(abort) {
        this.abort = typeof abort === 'boolean' ? abort : true;
    }

    getAbort() {
        return this.abort;
    }
}