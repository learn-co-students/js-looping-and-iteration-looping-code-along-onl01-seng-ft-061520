// Code your solutions in this file


function writeCards(names, event) {
    let thankYou = [];
    for (let x=0; x < names.length; x++) {
        thankYou.push(`Thank you, ${names[x]}, for the wonderful ${event} gift!`);
    }
    return thankYou;
}

writeCards(["Abe", "Bea", "CC"], "birthday party")


function countDown(num) {
    while (num > 0) {
        console.log(num);
        num --;
    }   
    console.log(num);
}

countDown(10);

