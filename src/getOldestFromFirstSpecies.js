const data = require('../data/zoo_data');

// testando avaliador
function getOldestFromFirstSpecies(id) {
  /* Passado o id de um funcionário, encontra a primeira espécie de animal
  gerenciado pelo funcionário, e retorna um array com nome, sexo e idade
  do animal mais velho dessa espécie. */
  const funcionario = data.employees.find((employee) =>
    employee.id === id).responsibleFor[0];
  const animais = data.species.find((specie) =>
    specie.id === funcionario).residents;
  /* Pesquisa sobre Sort:
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort */
  const animalMaisVelho = animais.sort((idade1, idade2) =>
    idade2.age - idade1.age)[0];
  return [animalMaisVelho.name, animalMaisVelho.sex, animalMaisVelho.age];
}

module.exports = getOldestFromFirstSpecies;
