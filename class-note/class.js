function Person(name, age){
    this.name = name;
    this.age = age;
}

const jessie = new Person('jessie', 20)

class Person {
    constructor(name, age){
        console.log("Generated");
        this.name = name;
        this.age = age;
    }
}

const max = new Person('max', 30);
console.log(max)