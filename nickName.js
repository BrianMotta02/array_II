const nome = "Brian Schu de Andrade Motta";

function nickName(name) {
    let limitaNick = name.slice(0, 13);
    let removeEspaco = limitaNick.replace(/\s+/g, '');
    let nickFinal = removeEspaco.padStart(removeEspaco.length + 1, "@");
    console.log(nickFinal.toLowerCase().trim());
}

nickName(nome);