"use strict";
console.log("Hey");
let a = 10;
console.log("Começou com " + a);
a = 11;
console.log("Terminou com " + a);
let b = "nome";
// Funções
// JS
// function soma(num1, num2) {
//   return num1 + num2;
// }
// console.log (soma (5, 3))
// TS
// function soma(num1:number, num2:number){
//     return num1 + num2
// }
// let resultado = soma(5,3)
// console.log(resultado)
/*
    Tipagem JS
    - Number
    - String
    - Boolean
    - Undefined
    - Object
    - Null

    Typescript
    - Any
    - Unknown
    - Tuple
    - Never
    - Enum
*/
// Any
let preco = 40;
let item = "nomeDoItem";
let emEstoque = true;
let quantidade;
quantidade = 10;
quantidade = "vazio";
// Arrays
let values = [10, 20, 30, 40, 50, "a"];
let values2 = [10, 20, 30, 40, 50];
// Tuplas
let outroItem = ["Maçã", true, 120];
// Enum
var Cargo;
(function (Cargo) {
    Cargo[Cargo["admin"] = 0] = "admin";
    Cargo[Cargo["read"] = 1] = "read";
    Cargo[Cargo["backup"] = 2] = "backup";
})(Cargo || (Cargo = {}));
const user = {
    nome: "André",
    idade: 35,
    regras: Cargo.admin,
};
// Funções
function soma(numero1, numero2) {
    return numero1 + numero2;
}
let resultado = soma(1, 2);
console.log(soma(10, 30));
// Função VOID
function resultadoFinal(valor) {
    console.log("O resultado da operação é de " + valor);
}
resultadoFinal(soma(3, 5));
// Objects
const pessoa = {
    nome: "André",
    idade: 35,
};
console.log(pessoa.nome, pessoa.idade, "anos");
const pessoa1 = {
    nome: "Beatriz",
    idade: 36,
    altura: 1.55,
};
// Never
function generateError(mensagem, code) {
    throw { message: mensagem, errorCode: code };
}
generateError("A aplicação parou!", 500);
