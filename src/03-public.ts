export class MyDate {
  year: number;   // ts nos pide que siempre inicialicemos las propiedades al declararlas o en el constructor
  public month: number;   // nivel de acceso a cualquier propiedad o metodo en una clase. puedo acceder a esto desde fuera de la clase
  day: number;    // todas las propiedades y metodos son public por defecto
  constructor(year: number, month: number, day: number) {
    this.year = year;   // inicializamos las propiedades
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.year}/${this.month}/${this.day}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount
    }
    if (type === 'months') {
      this.month += amount
    }
    if (type === 'years') {
      this.year += amount
    }
  }
}

const myDate = new MyDate(2022, 10, 15);
console.log(myDate.printFormat());
myDate.add(5, 'days');
console.log(myDate.printFormat());
