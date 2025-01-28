const prompt = require("prompt-sync")();

const vitorias = parseInt(prompt("Quantidade de vitórias: "));
const derrotas = parseInt(prompt("Quantidade de derrotas: "));

function calcularMmr(vitorias, derrotas) {
    if (vitorias < 0 || derrotas < 0) {
        return "O Herói ainda não iniciou sua jornada nas filas ranqueadas.";
    }
    return vitorias - derrotas;
}

const mmr = calcularMmr(vitorias, derrotas);

let elo = "";


if (mmr < 10) {
    elo = "Ferro";
} else if (mmr <= 20) {
    elo = "Bronze";
} else if (mmr <= 50) {
    elo = "Prata";
} else if (mmr <= 80) {
    elo = "Ouro";
} else if (mmr <= 90) {
    elo = "Platina";
} else if (mmr <= 100) {
    elo = "Ascendente";
} else {
    elo = "Imortal";
}

console.log(`O Herói tem MMR de ${mmr}. Portanto, está no elo ${elo}`);
