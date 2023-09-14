/*const nome = "Novo Hamburgo - RS";
console.log(nome.slice(-2));*/

const valor = "97.50.00";

let altera = "";
let soma = 0;



for (let i of valor) {
    while (soma < valor.length) {
        soma++;
        if (i === ".") {
            altera = valor.replace(".", ",");
        }
    }
}
console.log(altera);
