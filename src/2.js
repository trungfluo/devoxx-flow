
// Error too late
const x = {
  first: 5,
  second: 6,
  first: 7,
  name: "X",
  third: 8,
};
const y = x.name;
const z = y.someProp; // real error
const t = z.someProp;
console.log(t.toString()); // error at runtime
