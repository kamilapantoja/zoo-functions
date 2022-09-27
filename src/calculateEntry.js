const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const somaVisitantes = entrants.reduce((acc, entrant) => {
    if (entrant.age < 18) {
      acc.child += 1;
    } if (entrant.age >= 18 && entrant.age < 50) {
      acc.adult += 1;
    } if (entrant.age >= 50) {
      acc.senior += 1;
    } return acc;
  }, { child: 0, adult: 0, senior: 0 });
  return somaVisitantes;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const qtdVisitantes = countEntrants(entrants);
  const precos = data.prices;
  const valorTotalCriancas = qtdVisitantes.child * precos.child;
  const valorTotalAdultos = qtdVisitantes.adult * precos.adult;
  const valorTotalIdosos = qtdVisitantes.senior * precos.senior;
  return valorTotalAdultos + valorTotalIdosos + valorTotalCriancas;
}

module.exports = { calculateEntry, countEntrants };
