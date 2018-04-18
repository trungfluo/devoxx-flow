// @flow

function logArray(values: Array<string>) {
  console.log(values);
  // logNullableArray(values);
}

function logNullableArray(values: Array<string | null>) {
  console.log(values);
}
