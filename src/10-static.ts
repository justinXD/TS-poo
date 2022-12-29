console.log('Math.PI',Math.PI)  // propiedad estatica, esto significa que no tengo que crear una nueva instancia de la clase Math para acceder a los metodo y propiedades de Math
console.log('Math.max',Math.max(1,2,3,4,5,6,7,8,9))  // metodo estatico

class MyMath {
  constructor() {}

  static readonly PI: number = 3.1415926

  static max(...numbers: number[]): number {
    console.log(numbers)
    return numbers.reduce((max, item) => max > item ? max : item);
  }
}

console.log('MyMath', MyMath.PI)
console.log('MyMath.max', MyMath.max(1,8,6,2,4,96,2,4,245,15))
console.log('MyMath.max', MyMath.max(-1,-8,-6,-2,-4,-96,-2,-4,-245,-15))
