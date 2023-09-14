function verificaIdade(idade) {
    if (idade <= 21) {
        return "jovem";
    }
    if (idade >= 22 && idade <= 65) {
        return "Adulto";
    }
    if (idade >= 66) {
        return "Idoso";
    }
}

let recebeFunction = verificaIdade(18);
console.log(recebeFunction);


function apresentar(pessoa) {

}

let z = 5
function soma(x, y) {
    return x + y + z;
}
console.log(soma(5, 3));