let saldoGames = definirPontuacao(165, 72);
let rankingJogador = definirRanking(saldoGames);

function definirPontuacao(Vitoria, Derrota) {
  let gamerPontuacao = Vitoria - Derrota;
  return gamerPontuacao;
}

function definirRanking(gamerPontuacao) {
  let rankingJogador = "Ferro";

  if (gamerPontuacao > 10 && gamerPontuacao <= 20) {
    rankingJogador = "Bronze";
  } else if (gamerPontuacao > 20 && gamerPontuacao <= 50) {
    rankingJogador = "Prata";
  } else if (gamerPontuacao > 50 && gamerPontuacao <= 80) {
    rankingJogador = "Ouro";
  } else if (gamerPontuacao > 80 && gamerPontuacao <= 90) {
    rankingJogador = "Diamante";
  } else if (gamerPontuacao > 90 && gamerPontuacao <= 100) {
    rankingJogador = "Lendário";
  } else if (gamerPontuacao > 100) {
    rankingJogador = "Imortal";
  }
  return rankingJogador;
}

console.log(
  "O Herói tem o saldo de " +
    saldoGames +
    " e está no Ranking " +
    rankingJogador
);
