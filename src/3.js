/*
type Product = {
  type: 'HOME' | 'AUTO' | 'LOAN',
  name: string,
  address: string,
  vehicule: string,
  bank: string,
}
*/

function getMonthlyPayment(product) {
  let price;
  if (product.vehicule) {
    price = 70;
  } else if (product.bank) {
    price = 2000;
  }

  return price.toFixed(2);
}

const auto = {
  vehicule: 'C3',
};
console.log(getMonthlyPayment(auto));

const loan = {
  bank: 'SG',
};
console.log(getMonthlyPayment(loan));

const habitation = {
  address: 'Paris',
};
console.log(getMonthlyPayment(habitation));
