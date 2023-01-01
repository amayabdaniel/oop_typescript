console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(2));
console.log(Math.pow(2, 3));

console.log(Math.abs(-2));
console.log(Math.ceil(2.1));

console.log(Math.floor(2.9));

console.log(Math.round(2.5));

console.log(Math.random());

console.log(Math.round(Math.random() * 10));

class MyMath {
  static readonly PI = 3.14;

  static max (...numbers: number[]) {
    return numbers.reduce((max, item) => max >= item ? max : item, 0);
  }
}


console.log(MyMath.PI);
console.log(MyMath.max(1, 2, 3, 4, 5));


