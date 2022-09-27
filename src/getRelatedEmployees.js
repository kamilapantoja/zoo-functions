const data = require('../data/zoo_data');

function isManager(id) {
  const verificaGerente = data.employees.some((employee) =>
    employee.managers.find((gerente) => gerente === id));
  return verificaGerente;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const gerente = data.employees.filter((employee) =>
      employee.managers.includes(managerId));
    return gerente.map((funcionario) => `${funcionario.firstName} ${funcionario.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
