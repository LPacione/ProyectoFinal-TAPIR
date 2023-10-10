export class TestingCore {
   static mapClassToTestingInformation = new Map();

   static mainMethod() {
       TestingSetup.setup();
   }

   static afterExecution(thisJoinPointStaticPart, thisJoinPoint) {
       const className = `class ${thisJoinPointStaticPart.getSignature().getDeclaringTypeName()}`;
       
       if (TestingCore.mapClassToTestingInformation.has(className)) {
           const ti = TestingCore.mapClassToTestingInformation.get(className);
           const objectHashCode = thisJoinPoint.getThis().hashCode();
           
           if (!ti.getMapObjectsToCallSequence().has(objectHashCode)) {
               ti.getMapObjectsToCallSequence().set(objectHashCode, "");
           }
           
           const methodName = `${thisJoinPoint.getSignature().getDeclaringTypeName()}.${thisJoinPoint.getSignature().getName()}`;
           const methodSymbol = ti.getMapMethodsToSymbols().get(methodName);
           
           if (ti.getMapMethodsToSymbols().has(methodName)) {
               const newSequence = ti.getMapObjectsToCallSequence().get(objectHashCode) + methodSymbol;
               ti.getMapObjectsToCallSequence().set(objectHashCode, newSequence);
               
               ti.getMatcher().reset(newSequence);
               const isMatching = ti.getMatcher().matches() || ti.getMatcher().hitEnd();
               
               if (!isMatching) {
                   console.log("-------------------------------");
                   console.log("---       ERROR FOUND       ---");
                   console.log("-------------------------------");
                   console.log("Class: " + className);
                   console.log("Object Code: " + objectHashCode);
                   console.log("Method Executed: " + methodName);
                   console.log("Regular Expression: " + ti.getRegularExpression());
                   console.log("Execution Sequence: " + newSequence);
                   
                   if (ti.getAbort()) {
                       console.log("-------------------------------");
                       console.log("-----  SYSTEM ABORTING... -----");
                       console.log("-------------------------------");
                       process.exit(0);
                   } else {
                       console.log("-------------------------------");
                       console.log("--  CONTINUING EXECUTION... ---");
                       console.log("-------------------------------");
                       console.log();
                   }
               }
           }
       }
   }
}

// Pointcut para la ejecución del método principal
export function mainMethod() {
    TestingSetup.setup();
  }
  
  // Pointcut para la ejecución de otros métodos
  export function afterExecution(thisJoinPointStaticPart, thisJoinPoint) {
    TestingCore.afterExecution(thisJoinPointStaticPart, thisJoinPoint);
  }
