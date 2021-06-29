function logMessage(value: number | string){
    console.log(value);
    if(typeof value === "number"){
        value.toString()
    }
    if(typeof value === "string"){
        value.toLowerCase()
    }
}

logMessage("Hello")
logMessage(100)

interface Developer{
    name: string;
    skill: string    
}

interface Person{
    name: string;
    age: number;
}

// union type
const askSomeone2 = (someone: Developer | Person) =>{
    someone.name
    // someone.age
    // someone.skill
}

// intersection type
const askSomeone = (someone: Developer & Person) =>{
    someone.name
    someone.age
    someone.skill
}

