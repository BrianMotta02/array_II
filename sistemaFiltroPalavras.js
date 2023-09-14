const frase = "A pandemia ja acabou";
let verificador = 0;

function filtro(fraseFiltrar) {
    const arrayNome = fraseFiltrar.split(" ");
    let contador = 0;

    for (contador; contador < arrayNome.length; contador++) {
        if (arrayNome[contador] === "pandemia" || arrayNome[contador] === "covid" || arrayNome[contador] === "Pandemia" || arrayNome[contador] === "Covid") {
            verificador++;
        }
    }

    if (verificador > 0) {
        console.log(`A palavra está bloqueada`);
    } else {
        console.log(`A palavra foi permitida`);
    }
}

filtro(frase);
