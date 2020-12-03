
/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * How to properly create a class^
 */

class Calc {

    constructor(numOne, numTwo) {
        this.numOne = numOne;
        this.numTwo = numTwo;
    }

    addition() {
        return (this.numOne + this.numTwo);
    }

    subtraction() {
        return (this.numOne - this.numTwo);
    }

    multiplication() {
        return (this.numOne * this.numTwo);
    }

    division() {
        return (this.numOne/this.numTwo);
    }

}

/*
function operateFunc(sampleCalculator, operator) {
    if (operator == "+") {
        sampleCalculator.addition();
    }else if(operator == '-') {
        sampleCalculator.subtraction();
    }else if(operator == '*') {
        sampleCalculator.multiplication();
    }else {
        sampleCalculator.division();
    }
}*/


function loadFormData() {
    var numberOne = parseInt(document.getElementById("firstNum").value);
    console.log(numberOne);
    var numberTwo = parseInt(document.getElementById("secondNum").value);
    console.log(numberTwo);
    var operatorCalc = document.getElementById("operator").value;
    let calcDemo = new Calc(numberOne,numberTwo);
    var res = 0;

    if (operatorCalc == "+") {
        res = calcDemo.addition();
    }else if(operatorCalc == "-") {
        res = calcDemo.subtraction();
    }else if(operatorCalc == "*") {
        res = calcDemo.multiplication();
    }else {
        res = calcDemo.division();
    }

    var textAreaResult = document.getElementById("result");
    textAreaResult.value = res;


}