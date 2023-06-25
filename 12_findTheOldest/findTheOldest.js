const findTheOldest = function(people) {
  if (people.length === 0) {
    return {};
  }

  return people.reduce((oldestPerson, person) => {
    const oldestPersonAge = getPersonAge(oldestPerson);
    const personAge = getPersonAge(person);

    return (oldestPersonAge > personAge) ? oldestPerson : person;
  });
};

const getPersonAge = (person) => {
  return (person.yearOfDeath !== undefined)
    ? person.yearOfDeath - person.yearOfBirth
    : new Date().getFullYear() - person.yearOfBirth;
};

// Do not edit below this line
module.exports = findTheOldest;
