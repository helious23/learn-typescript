enum Shoes {
    Nike ='nike',
    Adidas = 'adidas'
}

const myShoes = Shoes.Nike;
console.log(myShoes)

enum Answer {
    Yes = 'Y',
    No = 'N'
}

const askQuestion = (answer: Answer) => {
    if(answer === Answer.Yes){
        console.log("정답")
    }
    if(answer === Answer.No){
        console.log("오답")
    }
}
askQuestion(Answer.Yes)