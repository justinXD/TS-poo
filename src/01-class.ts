export class MyDate {
  year: number;   // ts nos pide que siempre inicialicemos las propiedades al declararlas o en el constructor
  month: number;
  day: number;
  constructor(year: number, month: number, day: number) {
    this.year = year;   // inicializamos las propiedades
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(2022, 10, 15)

console.log(myDate)
