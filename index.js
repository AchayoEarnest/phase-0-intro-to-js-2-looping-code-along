// Code your solutions in this file
var namesArray = ["Guadalupe", "Ollie", "Aki"];
var event = "surpriseGift"

function writeCards(namesArray, event){
    let cards = [];
    for(var i = 0; i < namesArray.length; i++){
        cards.push(`Thank you, ${namesArray[i]}, for the wonderful birthday gift!,`);
    }

    console.log(cards);
}