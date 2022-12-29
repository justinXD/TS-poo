export class MyDate {
  constructor(
    public year: number = 1999, // es una buena practica definir el alcance de metodos y funciones para aprovechar
    private _month: number = 4,   // al maximo el analisis de codigo estatico de TS y poder usar default params
    private _day: number = 9
    ) {}
  // private nos limita el acceso a las clases o metodos que sean definidos como private y solo son accesibles dentro de la clase
  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month)
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
      this._day += amount
    }
    if (type === 'months') {
      this._month += amount
    }
    if (type === 'years') {
      this.year += amount
    }
  }

  get day() {   // metodo get
    return `${this._day}`
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0
  }

  set month(newVal: number) {
    if (newVal >= 1 && newVal <= 12) {
      this._month = newVal
    } else {
      throw new Error('out of range')
    }
  }
}

const myDate = new MyDate(2022, 5, 9);
console.log(myDate.printFormat());
myDate.day;   // esto se comporta como una propiedad aunque es un metodo
myDate.month = 10;
console.log('10', myDate.printFormat())
myDate.month = 20;  // hasta aqui va a llegar
console.log('esto truena', myDate.month)
