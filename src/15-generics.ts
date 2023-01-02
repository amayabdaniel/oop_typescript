
/* function getValue(value: unknown) {
  return value;
}

function getValue(value: number | string) {
  return value;
} */

function getValue<myType>(value: myType) {
  return value;
}



getValue<number>(1).toFixed();
getValue<string>('1').toLowerCase()
getValue<number[]>([1, 2, 3]).push(4);
