//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;

console.log(num10 + string8 + one) //1081
//2. write a loop that will log only numbers divisible by 3 between 20 - 100

for (let i = 20; i <= 100; i++) {
  if (!(i % 3)) {
    console.log(i)
  }
}

//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];

console.log(Math.floor(scores.reduce((acum, score) => acum + score) / scores.length))