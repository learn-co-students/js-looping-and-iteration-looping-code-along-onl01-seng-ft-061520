// Code your solutions in this file
function countDown(num){
    for (let count = num; count > -1; count--){
        console.log(count)
    }
}
function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
}