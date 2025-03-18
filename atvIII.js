const readline = require('readline-sync');

function calcularFrete(quantidade, regiao, distancia, rastreamento){
    let valorPorPeca;

    switch (regiao){
        case 1:
            valorPorPeca = 1.20;
            break;
        case 2:
            valorPorPeca = 1.30;
            break;
        case 3:
            valorPorPeca = 1.50;
            break;
        default:
            return "Regiãi inválida";
    }
    let valorFrete = 0;
    if (quantidade <= 1000) {
        valorFrete = quantidade * valorPorPeca;
    } else{
        valorFrete = 1000 * valorPorPeca;
        const pecasExcedentes = quantidade - 1000;
        valorFrete += pecasExcedentes * valorPorPeca * 0.88;
    }
    const valorPorKm = distancia;
    const valorRastreamento = rastreamento ? 200 : 0;
    const totalFrete = valorFrete + valorPorKm + valorRastreamento;

    return{
        valorFrete: valorFrete.toFixed(2),
        valorPorKm: valorPorKm.toFixed(2),
        valorRastreamento: valorRastreamento.toFixed(2),
        totalFrete: totalFrete.toFixed(2)
    };
}

function main(){
    const quantidade = parseInt(readline.question("Digite a quantidade de peças: "));
    const regiao = parseInt(readline.question("Digite a região (1-Sudeste, 2-Sul, 3-Centro-Oeste)"));
    const distancia = parseInt(readline.question("Digite a distÂncia em KM: "));
    const rastreamento = readline.question("Deseja rastreamento? (s/n) ").toLocaleLowerCase() === "s";

    const resultado = calcularFrete(quantidade, regiao, distancia, rastreamento);

    console.log("Valor do frete pelas peças: R$", resultado.valorFrete);
    console.log("Valor do frete por km: R$", resultado.valorPorKm);
    console.log("Taxa de rastreamento: R$", resultado.valorRastreamento);
    console.log("Total do frete: R$", resultado.totalFrete);
}
main();