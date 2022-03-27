// Code your solutions in this file
const newArr = [];
function writeCards(guests, event) {
    for (let i = 0; i < guests.length; i++) {
        newArr.push(`Thank you, ${guests[i]}, for the wonderful ${event} gift!`);
    }  return newArr;}
function countDown() {
    let countDown = 10;
    while (countDown > -1) {
        console.log(countDown--);
        }}
