const usuarios = [
    {
        nome: "Brian",
        idade: 18
    },
    {
        nome: "Carlos",
        idade: 25
    },
    {
        nome: "Bernardo",
        idade: 10
    }
];



const resultado = usuarios.find(function (usuario) {
    return usuario.nome === 'Carlos';
})

console.log(resultado);

/*const resultadoVericacao = lista.every(function (verificaIdade) {
    return verificaIdade.idade >= 18;
})

if (resultadoVericacao) {
    console.log(`Festa liberada`);
} else {
    console.log(`Festa interditada`)
}*/