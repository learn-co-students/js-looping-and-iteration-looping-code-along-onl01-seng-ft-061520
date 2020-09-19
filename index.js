// Code your solutions in this file

function writeCards(friends, eventName) {
  let emptyAr = [];

  for (let i = 0; i < friends.length; i++) {
    emptyAr.push(
      `Thank you, ${friends[i]}, for the wonderful ${eventName} gift!`
    );
  }

  return emptyAr;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number--);
  }
}
