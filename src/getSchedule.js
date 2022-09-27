const data = require('../data/zoo_data');

const animaisDisponiveis = (dia) =>
  data.species
    .filter(({ availability }) => availability.includes(dia))
    .map((specie) => specie.name);

const diasDisponiveis = (diasDaSemana) => {
  const dias = {};
  diasDaSemana.forEach((dia) => {
    if (dia === 'Monday') {
      dias[dia] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      dias[dia] = {
        officeHour: `Open from ${data.hours[dia].open}am until ${data.hours[dia].close}pm`,
        exhibition: animaisDisponiveis(dia),
      };
    }
  });
  return dias;
};

const horariosDisponiveis = (dia) => {
  const horarios = {};
  if (dia === 'Monday') {
    horarios[dia] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  } else {
    horarios[dia] = {
      officeHour: `Open from ${data.hours[dia].open}am until ${data.hours[dia].close}pm`,
      exhibition: animaisDisponiveis(dia),
    };
  }
  return horarios;
};

function getSchedule(scheduleTarget) {
  const cronograma = Object.keys(data.hours);
  if (scheduleTarget === undefined) {
    return diasDisponiveis(cronograma);
  } if (cronograma.some((dia) => dia === scheduleTarget)) {
    return horariosDisponiveis(scheduleTarget);
  } if (data.species.some(({ name }) => name === scheduleTarget)) {
    return data.species.find(({ name }) => name === scheduleTarget).availability;
  } return diasDisponiveis(cronograma);
}

module.exports = getSchedule;
