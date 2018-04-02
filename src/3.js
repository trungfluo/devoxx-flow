// @flow

// function logPerson(firstname, lastname) {
//   console.log(`Hello ${firstname} ${lastname}`)
// }

function logPerson({firstname, lastname}) {
  console.log(`Hello ${firstname} ${lastname}`)
}
logPerson({firstname: 'Paul', lastname: 'Dupont'});
