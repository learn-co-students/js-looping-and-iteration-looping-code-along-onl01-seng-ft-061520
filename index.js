// Code your solutions in this file
//let namesArray = ["Lisa", "Kaitlin", "Jan"];

function writeCards(namesArray, event) {
    var newArray = []
    for (let i = 0; i < namesArray.length; i++) {
        newArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}

//writeCards(namesArray);

function countDown(count) {

    while (count >= 0) {

        console.log(count);
        count -= 1;
    }

    return count;
}
countDown();