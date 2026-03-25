// function calculation(a, b) {


//     function add() {
//         return a + b;
//     }

//     function subtract() {
//         return a - b;
//     }

//     function multiply() {
//         return a * b;
//     }

//     function divide() {
//         return a / b;
//     }

//     return add() + " " + subtract() + " " + multiply() + " " + divide();
// }

// console.log(calculation(5, 10));

const calculation =(a , b) => {

const add =(a , b) => a + b;
const subtract = (a , b) => a - b;
const multiply = (a , b) => a * b;
const divide = (a , b) => a / b;

return add(a , b) + " " + subtract(a , b) + " " + multiply(a , b) + " " + divide(a , b);


}

    

console.log(calculation(5, 10));