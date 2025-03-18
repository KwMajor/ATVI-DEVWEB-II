const readline = require("readline-sync");

function calcularMediaPonderada(nota1, nota2, nota3, peso1, peso2, peso3){
    return(nota1 * peso1 +nota2 *peso2 + nota3 *peso3) / (peso1 +peso2 +peso3);

}

function classificarMedia(media){
    if(media >=9) return "Excelente";
    else if (media >= 8 && media < 9) return "Ótimo";
    else if (media >= 7 && media < 8) return "Bom";
    else if (media >= 6 && media < 7) return "Regular";
    else return "Insuficiente";
}

function main(){
    const peso1 = 3, peso2 = 3, peso3 = 4;
    let continuar = true;

    while (continuar){
        const nota1 = parseFloat(readline.question("Digite a primeira nota: "));
        const nota2 = parseFloat(readline.question("Digite a segunda nota: "));
        const nota3 = parseFloat(readline.question("Digite a terceira nota: "));

        const media = calcularMediaPonderada(nota1, nota2, nota3, peso1, peso2, peso3);
        const classificacao = classificarMedia(media);

        console.log(`Média: ${media.toFixed(2)} - Classificação: ${classificacao}`);
        const resposta = readline.question("Deseja calcular a média de outro aluno? (s/n)").toLocaleLowerCase();
        if (resposta !== "s"){
            continuar = false;
        }
    }
}
main();