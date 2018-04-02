type Collection = {
  [vehicle: string]: number | null,
};

const collection: Collection = {
  ferrari: 100000,
  mercedes: 40000,
  clio: null,
};

if (collection.ferrari) {
  console.log(collection);
  console.log(collection.ferrari.toFixed(1));
}
