const carros = [
    {
        nome: "i30",
        marca: "hyundai",
        ano: 2012,
        cor: 'preto'
    },

    {
        nome: 'civic',
        marca: "Honda",
        ano: 2019,
        cor: 'branco'
    }
];

const resultado = carros.find((veiculo) => {
    return veiculo.nome === 'civic';
});

function dadosVeiculo(veiculo) {
    console.log(`Nome: ${veiculo.nome}`);
    console.log(`Marca: ${veiculo.marca}`);
    console.log(`Ano: ${veiculo.ano}`);
    console.log(`Cor: ${veiculo.cor}`);
}

dadosVeiculo(resultado);