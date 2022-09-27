const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const idDasEspecies = data.species.filter((specie) => ids.includes(specie.id));
  return idDasEspecies;
}

module.exports = getSpeciesByIds;
