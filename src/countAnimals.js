const data = require('../data/zoo_data');

function totalDeAnimais(animaisResidentes, sexoDoAnimal) {
  const animalResidente = data.species.find(
    (animal) => animal.name === animaisResidentes,
  );

  const qtdAnimaisPorSexo = animalResidente.residents.filter(
    (resident) => resident.sex === sexoDoAnimal,
  );
  if (sexoDoAnimal !== undefined) {
    return qtdAnimaisPorSexo.length;
  } return animalResidente.residents.length;
}

function countAnimals(animal) {
  /* Se nenhum argumento for passado,
  retorna um objeto cujo o nome de cada espécie é uma chave desse objeto,
  e o total de animais dessa espécie é o seu valor; */
  if (animal === undefined) {
    const objetoDeAnimais = {};
    data.species.forEach((animais) => {
      objetoDeAnimais[animais.name] = animais.residents.length;
    });
    return objetoDeAnimais;
  }
  /* Recebendo como parâmetro um objeto com a chave specie,
  retorna um número, a quantidade de animais daquela espécie;

  Recebendo como parâmetro um objeto com a chave specie e sex,
  retorna um número, a quantidade de animais daquela espécie, no sexo selecionado. */
  return totalDeAnimais(animal.specie, animal.sex);
}

module.exports = countAnimals;
