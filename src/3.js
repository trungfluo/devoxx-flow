

// Not easy to refactor

function logPerson(firstname, lastname) {
  console.log(`Hello ${firstname} ${lastname}`)
}

// function logPerson({firstname, lastname}) {
//   console.log(`Hello ${firstname} ${lastname}`)
// }

logPerson('Paul', 'Dupont');
// logPerson({firstname: 'Paul', lastname: 'Dupont'});
