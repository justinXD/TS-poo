export class MyDate {
  private year: number;   // ts nos pide que siempre inicialicemos las propiedades al declararlas o en el constructor
  private month: number;
  private day: number;  // private nos bloquea el acceso a day desde fuera de la clase
  constructor(year: number, month: number, day: number) {
    this.year = year;   // inicializamos las propiedades
    this.month = month;
    this.day = day;
  }
  // private nos limita el acceso a las clases o metodos que sean definidos como private y solo son accesibles dentro de la clase
  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month)
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`
    }
    return `${value}`
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

  getDay() {
    return `${this.day}`
  }
}

const myDate = new MyDate(2022, 5, 9);
console.log(myDate.printFormat());
myDate.add(5, 'days');
console.log(myDate.printFormat());
console.log(myDate.getDay())
