export class Animal {
  constructor(protected name:string){}

    move(){
      console.log('Moving along!');
    }

    greeting() {
        return `Hello, I'm ${this.name}`;
    }

    protected doSomething() {
        console.log('dooooing something');
    }
}

export class Dog extends Animal {

  constructor(name: string, public owner: string){
    super(name);
  }

  woof(times: number): void{
    for (let index = 0; index < times; index++) {
        console.log(`Woof! ${this.name}`);
    }
    this.doSomething();
  }

  move(): void {
      console.log('Running');
  }

}
const cheis = new Dog('cheis', 'nico');
//cheis.name = 'otro nombre';
cheis.woof(1);
