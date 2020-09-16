// Code your solutions in this file
function writeCards(arr, name) {
    for (let i = 0; i < arr.length; i++) {
        let thankYouCards = [];
        for (let i = 0; i < arr.length; i++) {
            thankYouCards.push(`Thank you, ${arr[i]}, for the wonderful ${name} gift!`)
        }
        return thankYouCards
    }
}

function countDown(num) {
    while (num >= 0) {
        console.log(num--);
    }
}