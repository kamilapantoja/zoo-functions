const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const arrayFuncionarioVazio = {};
  if (employeeName === undefined) {
    return arrayFuncionarioVazio;
  }
  const objetoDoFuncionario = data.employees.find((person) =>
    person.firstName.includes(employeeName) || person.lastName.includes(employeeName));
  return objetoDoFuncionario;
}

module.exports = getEmployeeByName;
