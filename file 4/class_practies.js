        // lass practies 

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
    
    
}

    const tommy = new dog ("tommy",3);
    console.log(tommy);
    console.log(tommy.isCute());
