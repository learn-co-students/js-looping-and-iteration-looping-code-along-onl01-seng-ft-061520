// Code your solutions in this file
function writeCards(array, message){
  let result = []
  for(let i = 0; i<array.length; i++){
    result.push(`Thank you, ${array[i]}, for the wonderful ${message} gift!`);
  };
  return result;
}

function countDown(num){
  for(let i=num; i>=0; i--){
    console.log(i);
  };
}
