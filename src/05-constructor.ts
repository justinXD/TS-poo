export class MyDate {
  constructor(
    public year: number = 1999, // es una buena practica definir el alcance de metodos y funciones para aprovechar
    public month: number = 4,   // al maximo el analisis de codigo estatico de TS y poder usar default params
    private day: number = 9
    ) {}
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
console.log(myDate.getDay())

const myDate2 = new MyDate();
console.log('() => ', myDate2.printFormat());

const myDate3 = new MyDate(2022);
console.log('(2022) => ', myDate3.printFormat());

const myDate4 = new MyDate(2022, 7);
console.log('(2022, 7) => ', myDate4.printFormat());
