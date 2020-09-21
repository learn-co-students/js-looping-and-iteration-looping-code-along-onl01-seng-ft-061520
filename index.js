// Code your solutions in this file
function writeCards(nameArray, eventName) {
  let thankYouCards = []
  for (let i = 0; i < nameArray.length; i++) {
    thankYouCards.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`)
  }
  return thankYouCards
}

function countDown(number) {
  while (number > 0) {
    console.log(number);
    number -= 1;
  }
  console.log(number);
}
