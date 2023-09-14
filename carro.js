const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado === true) {
            console.log(`O carro está ligado`);
        } else if (this.ligado === false) {
            this.ligado = true;
        }
    },
    desligar: function () {
        if (this.ligado === false) {
            console.log(`O carro está desligado`);
        } else if (this.ligado === true) {
            this.ligado = false;
            this.velocidade = 0;
        }
    },
    acelerar: function () {
        if (this.ligado === false) {
            console.log(`Não é possível acelerar o carro desligado`);
        } else if (this.ligado === true) {
            this.velocidade = this.velocidade + 10;
        }
    }
};

carro.ligar();
carro.desligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.acelerar();

console.log(carro.velocidade);

//saber se um email é válido
//tem que ter pelo menos um @
//tem que ter pelo menos um ponto depois do @


const possivelEmail = "jose.messias@cubos.academy";

const indexArroba = possivelEmail.indexOf("@"); //12 a partir do 0

const indexPontoAposArroba = possivelEmail.indexOf(".", indexArroba); //vai buscar pelo ponto somente após o @