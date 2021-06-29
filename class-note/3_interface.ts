interface User {
    age: number;
    name: string;
}

const max: User = {
    age: 33,
    name: "max"
}

const getUser = (user: User): void => {
    console.log(user);
}
const jessie = {
    name: 'jessie',
    age: 21,
}
getUser(jessie);

interface SumFunction {
    (a: number, b:number): number
}

let sum: SumFunction

sum = (a: number, b): number => {
    return a + b;
}

interface StringArray {
    [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10

interface StringRegexDictionary {
    [key: string]: RegExp;
}

const obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

Object.keys(obj).forEach(function(value){
    
})