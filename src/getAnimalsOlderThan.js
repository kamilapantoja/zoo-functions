const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const verificaIdadeMinima = data.species.find((specie) => specie.name === animal);
  return verificaIdadeMinima.residents.every((resident) => resident.age > age);
}

module.exports = getAnimalsOlderThan;
