export class MyService {

  static instance: MyService | null = null;   // declaramos la propiedad que sera la instancia

  private constructor(private name: string) {}  // constructor privado para crear la instancia dentro de la clase

  getName() {
    return this.name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log('debería entrar una vez');
      MyService.instance = new MyService(name);   // creamos la instancia de MyService
    }
    return MyService.instance;
  }
}

const myService1 = MyService.create('service 1');
console.log(myService1.getName());
const myService2 = MyService.create('service 2');
console.log(myService2.getName());
const myService3 = MyService.create('service 3');
console.log(myService3.getName());
