const readline = require('readline-sync');

function calcularSalario(codigo, horasTrabalhadas, turno, categoria, salarioMinimo) {
    let valorHora;

    if (categoria === 'F') {
        switch (turno) {
            case 'M':
                valorHora = salarioMinimo * 0.10;
                break;
            case 'V':
                valorHora = salarioMinimo * 0.15;
                break;
            case 'N':
                valorHora = salarioMinimo * 0.20;
                break;
            default:
                return "Turno inválido";
        }
    } else if (categoria === 'G') {
        switch (turno) {
            case 'M':
                valorHora = salarioMinimo * 0.30;
                break;
            case 'V':
                valorHora = salarioMinimo * 0.35;
                break;
            case 'N':
                valorHora = salarioMinimo * 0.40;
                break;
            default:
                return "Turno inválido";
        }
    } else {
        return "Categoria inválida";
    }

    const salarioInicial = valorHora * horasTrabalhadas;

    let auxilioAlimentacao;
    if (salarioInicial <= 800) {
        auxilioAlimentacao = salarioInicial * 0.25;
    } else if (salarioInicial > 800 && salarioInicial <= 1200) {
        auxilioAlimentacao = salarioInicial * 0.20;
    } else {
        auxilioAlimentacao = salarioInicial * 0.15;
    }

    const salarioFinal = salarioInicial + auxilioAlimentacao;

    return {
        codigo,
        horasTrabalhadas,
        turno,
        categoria,
        valorHora: valorHora.toFixed(2),
        salarioInicial: salarioInicial.toFixed(2),
        auxilioAlimentacao: auxilioAlimentacao.toFixed(2),
        salarioFinal: salarioFinal.toFixed(2)
    };
}

function main() {
    const salarioMinimo = parseFloat(readline.question("Digite o salário mínimo atual: "));
    let continuar = true;

    while (continuar) {
        const codigo = readline.question("Digite o código do funcionário: ");
        const horasTrabalhadas = parseFloat(readline.question("Digite o número de horas trabalhadas: "));
        const turno = readline.question("Digite o turno (M, V, N): ").toUpperCase();
        const categoria = readline.question("Digite a categoria (F, G): ").toUpperCase();

        const resultado = calcularSalario(codigo, horasTrabalhadas, turno, categoria, salarioMinimo);

        console.log("Código:", resultado.codigo);
        console.log("Horas trabalhadas:", resultado.horasTrabalhadas);
        console.log("Turno:", resultado.turno);
        console.log("Categoria:", resultado.categoria);
        console.log("Valor da hora trabalhada: R$", resultado.valorHora);
        console.log("Salário inicial: R$", resultado.salarioInicial);
        console.log("Auxílio-alimentação: R$", resultado.auxilioAlimentacao);
        console.log("Salário final: R$", resultado.salarioFinal);

        const resposta = readline.question("Deseja cadastrar outro funcionário? (s/n): ").toLowerCase();
        if (resposta !== 's') {
            continuar = false;
        }
    }
}

main();