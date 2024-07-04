// Y And (&&) , O or (||) , Negacion Not (!)

// && Solo devuelve true si todas las expresiones son verdaderas

let a = 5;
let b = 3;
let c = 8;

// console.log(a > b && a < c);
// console.log(a > c && a < c);
// console.log(a > b && a > c);
// console.log(a > b && a < c && c === c);

// || (or) Devuelve con al menos una expresion verdadera

console.log(a > b || a < c);
console.log(a > c || a < c);
console.log(a > c || a == c);

// ! (not)
console.log(!a < b);

