export class MyService {
  static instance: MyService | null = null;

  private constructor(private name: string) { }

  getName() {
    return this.name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const myService1 = MyService.create('myService1');
console.log(myService1.getName());
const myService2 = MyService.create('myService2');
console.log(myService1.getName());

console.log(myService1 === myService2);

