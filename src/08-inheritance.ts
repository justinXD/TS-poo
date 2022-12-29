export class Animal {
  constructor(
    public name: string
    ) {}

    move() {
      console.log('moving along')
    }

    greeting(): string {
      return `Hello I'm ${this.name}`
    }
}

export class Cat extends Animal {
  constructor(public name: string, public owner: string) {
    super(name) // super hace referencia al constructor de la clase padre (Animal) para pasarle el parametro que necesita (name)
  }
  miaw(times: number) {
    for (let index = 0; index < times; index++) {
      console.log('miaw')
    }
  }
}

const copito = new Animal('copito');
copito.move();
console.log(copito.greeting())

const gatihija = new Cat('gatihija', 'Justin');
gatihija.move()
console.log(gatihija.greeting())
gatihija.miaw(5)
console.log(gatihija.owner)
