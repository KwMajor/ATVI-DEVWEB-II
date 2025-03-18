const readline = require('readline-sync');

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
function classificarIMC(imc) {
    if (imc < 16) return "Baixo peso muito grave";
    else if (imc >= 16 && imc <= 16.99) return "Baixo peso grave";
    else if (imc >= 17 && imc <= 18.49) return "Baixo peso";
    else if (imc >= 18.50 && imc <= 24.99) return "Peso normal";
    else if (imc >= 25 && imc <= 29.99) return "Sobrepeso";
    else if (imc >= 30 && imc <= 34.99) return "Obesidade grau I"
    else if (imc >= 35 && imc <= 39.99) return "Obesidade grau II"
    else return "Obesidade grau III"
}

function main() {
    let continuar = true;
    while(continuar) {
        const peso = parseFloat(readline.question("Digite seu peso em KG: "));
        const altura = parseFloat(readline.question("Digite a sua altura: "));

        const imc = calcularIMC(peso, altura);
        const classificacao = classificarIMC(imc);

        console.log(`Seu IMC é ${imc.toFixed(2)}: ${classificacao}`);

        const resposta = readline.question("Deseja calcular outro IMC? (S/N)").toLowerCase();
        if (resposta !== "s"){
            continuar = false;
        }
    }
}
main();