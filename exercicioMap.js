const produts = [
    { nome: "arroz", preco: 500 },
    { nome: "carne", preco: 3200 },
];

const produtosDesconto = produts.map((produtos) => {
    return {
        valorDesconto: produtos.preco * 0.1
    }
});

console.log(produtosDesconto);