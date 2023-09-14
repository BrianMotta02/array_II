/*const nome = "brian schu motta";

const arrayNome = nome1.split(" ");

function primeiraLetraMaiscula(nome1) {

    primeiraLetra = arrayNome[0].slice(0, 1);

    primeiraMaiuscula = primeiraLetra.toUpperCase();

    const letraTransformada1 = primeiraMaiuscula;
}
function primeiraLetraMaiscula(arrayNome[0]);

console.log(letraTransformada1 + arrayNome[0]);
*/


const nome = "brian schu motta";

const arrayNome = nome.split(" ");

function primeiraLetraMaiuscula(palavra) {
    const primeiraLetra = palavra.slice(0, 1);
    const primeiraMaiuscula = primeiraLetra.toUpperCase();
    return primeiraMaiuscula + palavra.slice(1);
}

const primeiraPalavraTransformada1 = primeiraLetraMaiuscula(arrayNome[0]);
const primeiraPalavraTransformada2 = primeiraLetraMaiuscula(arrayNome[1]);
const primeiraPalavraTransformada3 = primeiraLetraMaiuscula(arrayNome[2]);
console.log(primeiraPalavraTransformada1 + " " + primeiraPalavraTransformada2 + " " + primeiraPalavraTransformada3);
