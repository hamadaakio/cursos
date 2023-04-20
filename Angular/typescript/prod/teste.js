"use strict";
// Union Type
function entrada(val1, val2) {
    let result;
    if (typeof val1 === "number" && typeof val2 === "number") {
        result = val1 + val2;
    }
    else if (typeof val1 === "string" && typeof val2 === "string") {
        result = val1 + val2;
    }
    else {
        result = "Não é possível concatenar, valores de tipos diferentes!";
    }
    return result;
}
const combinarVars = entrada(10, 3);
console.log(combinarVars);
const combinaTextos = entrada("A", "B");
console.log(combinaTextos);
const varsDif = entrada("A", 4);
console.log(varsDif);
// Literal Type
let valorProduto;
valorProduto = 10;
let tamanhoProduto;
tamanhoProduto = "M";
const func1 = {
    nome: "André",
    idade: 35,
    id: 1234,
    cargo: "CEO"
};
console.log(func1);
