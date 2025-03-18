const readline = require('readline-sync');

function classificarFaixaEtaria(idade) {
    if (idade < 12) return "Criança";
    else if (idade >= 12 && idade <= 18) return "Adolescente";
    else if (idade >= 19 && idade <= 59) return "Adulto";
    else return "Idoso";
}

function main() {
    const contador = {Criança: 0, Adolescente: 0, Adulto: 0, Idoso: 0};
    let continuar = true;

    while(continuar){
        const idade = parseInt(readline.question("Digite a idade: "));

        const faixa = classificarFaixaEtaria(idade);
        contador[faixa]++;

        console.log(`Faixa etária: ${faixa}`);
        console.log("Contador atual:", contador);

        const resposta = readline.question("Deseja inserir outra idade? (s/n) ").toLocaleLowerCase();
        if (resposta !== "s"){
            continuar = false;
        }
    }
    console.log("Total de pessoas por faixa etária:", contador);
}
main();