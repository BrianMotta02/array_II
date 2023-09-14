/*function cumprimentar(pessoa, idade) {
    console.log(`Bom dia, ${pessoa}, voce tem ${idade}`);
}

const nome = "Jose";
cumprimentar(nome, 15);
cumprimentar("Brian", 19);*/

/*const pessoaObj = {
    nome: "João",
    idade: 25,
    altura: 1.4
};

function apresenta(pessoa) {
    let verificaIdade = "";
    if (pessoa.idade < 25) {
        verificaIdade = "Jovem";
    } else if (pessoa.idade < 65) {
        verificaIdade = "Adulto";
    } else {
        verificaIdade = "Idoso";
    }
    console.log(`Ola meu nome é ${pessoa.nome}, sou um ${verificaIdade}, de ${pessoa.idade} anos, e tenho ${pessoa.altura}m`);
}

apresenta(pessoaObj);*/

function verificarMaioridade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

const valorRetornadoFuncao = verificarMaioridade(20);
console.log(valorRetornadoFuncao);