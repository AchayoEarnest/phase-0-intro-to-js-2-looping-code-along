// Code your solutions in this file
let namesArray = ["Guadalupe", "Ollie", "Aki"];

function writeCards(namesArray, event){
    let cards = [];
    for(let i = 0; i < namesArray.length; i++ )
    cards.push(`Thank you, ${namesArray[i]}, for the wonderful birthday gift!,`);

    console.log(cards);
}