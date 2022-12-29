export abstract class Animal {
  constructor(
    protected name: string  // es similar al private con la diferencia de que puedo usar herencia con protected
    ) {}

    move() {
      console.log('moving along')
    }

    greeting(): string {
      return `Hello I'm ${this.name}`
    }

    protected doSomething() {
      console.log('something');
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
    this.doSomething()
  }

  move() {  // esto es polimorfismo
    console.log('do it like a cat')
    super.move()
  }
}

const gatihija = new Cat('gatihija', 'Justin');
gatihija.move()
console.log(gatihija.greeting())
gatihija.miaw(1)
console.log(gatihija.owner)
