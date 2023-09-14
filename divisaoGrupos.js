const tamanhoGrupo = 4;
const nome = ['Brian', 'Jose', 'Bernardo', 'Arthur', 'Fulano', 'cabrito'];

function divisaoGrupo(nomes) {
    let grupo = [];

    for (let i = 0; i < tamanhoGrupo; i++) {
        grupo.push(nome[i]);
    }
    console.log(grupo.length);
    if (tamanhoGrupo < nome.length) {

        for (let i = nome.length - 1; i >= tamanhoGrupo; i--) {
            grupo2.unshift(nome[i]);
        }
        console.log(`grupo 2 = ${grupo2}`);
    }
    console.log(`grupo 1 = ${grupo}`);
}
divisaoGrupo(nome);
