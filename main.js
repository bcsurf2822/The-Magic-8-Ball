//User can input their name here
const userName = '';
console.log(`Hello ${userName}!`);
//The user can enter their question here
const userQuestion = '';
console.log(`${userQuestion} ${userName}?`);
//Using 2 methods from the math library i will generate a random Number
const randomNumber = Math.floor(Math.random() * 8); 
// console.log(randomNumber);
//I assigned each number a certain response.  Now we can enter our name and ask a question and recieve one of the following answers
const eightBall = randomNumber;
if (eightBall === 0) {
    console.log('It is certain');
} else if (eightBall === 1) {
    console.log('It is decidely so');
} else if (eightBall === 2) {
    console.log('For Sure!');
} else if (eightBall === 3) {
    console.log('I wouldnt do that');
} else if (eightBall === 4) {
    console.log('You should try');
} else if (eightBall === 5) {
    console.log('My sources say yes');
} else if (eightBall === 6) {
    console.log('Good idea');
} else if (eightBall === 7) {
    console.log('NO!')
}
