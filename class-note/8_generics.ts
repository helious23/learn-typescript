// function logText<T>(text: T): T{
//     console.log(text);
//     return text;
// }
// logText<string>('Hi');

// function logText(text: string | number) {
//     console.log(text);
//     return text;
// }

function logText<T>(text: T): T {
    console.log(text);
    return text;
}

const str = logText<string>('abc')
str.split('')

const bool = logText<boolean>(true)


// logText('a')
// logText(10)