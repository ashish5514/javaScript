  // super keyword


  class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat (){
       return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

//  const animal1 = new Animal("tom",2);
//  console.log(animal1);
// console.log( animal1.eat(animal1.eat()));
// console.log( animal1.isCute(animal1.isCute()));
// console.log( animal1.isSuperCute(animal1.isSuperCute()));



  // base class ne extend kari ne sub class kari sakay....

class dog extends Animal {
    constructor (name,age,speed){
        super(name,age);
        this.speed=speed;
    }

    run(){
        return`${this.name} is running`
    }

}

    // object ne instance pn kevay ..

const tommy = new dog ("tommy",3, 45);
 console.log(tommy);
 console.log(tommy.run());
 console.log(tommy.eat());
