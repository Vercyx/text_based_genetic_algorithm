//https://github.com/nature-of-code/noc-examples-p5.js/blob/master/chp09_ga/NOC_9_01_GA_Shakespeare/sketch.js

let chars = 'abcdefghijklmnopqrstuvwxyz ';
let pop = [];
let DNA = [];
let target = 'to be or not to be';
let targetArr = target.split('');
let members = 10;
let result = '';
let fit = 0
let fitnessVal = [];
let matingPool = [];

function setup() {
  
  for(i = 0; i < members; i++){
    for(z = 0; z < target.length; z++){
      DNA.push(chars.charAt(Math.floor(Math.random() * chars.length)));
    }
    pop.push(DNA);
    DNA = [];
  }
  
  createCanvas(400, 400);
  console.log(pop)
  evalFit();
  addToPool();
}

function draw() {
  background(220);
}



function evalFit(){
  for(i = 0; i < pop.length; i++){
    for(k = 0; k < targetArr.length; k++){
      if(pop[i][k] == targetArr[k]){
         fit++
         }
    }
    fitnessVal.push(fit);
    fit = 0
  }
  console.log(fitnessVal);
}


function addToPool(){
 for(i = 0; i < fitnessVal.length; i++){
   for(k = 0; k < fitnessVal[i]; k++){
     matingPool.push(pop[i]);
   }
   
 }
console.log(matingPool);
}
