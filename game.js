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
let parentA = [];
let parentB = [];
let oldPop = [];
let child = [];
let nothing = 0
let mutateChance = 10

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
  reproduce();
}

function draw() {
  background(220);
}



function evalFit(){
  fitnessVal = [];
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
  matingPool = [];
 for(i = 0; i < fitnessVal.length; i++){
   for(k = 0; k < fitnessVal[i]; k++){
     matingPool.push(pop[i]);
   }
   
 }
console.log(matingPool);
}


function reproduce(){
  oldPop = pop;
  pop = [];
  for(i = 0; i < 2; i++){
    child = [];
    parentA[0] = matingPool[Math.floor(Math.random() * matingPool.length)];
    parentB[0] = matingPool[Math.floor(Math.random() * matingPool.length)];
    for(j = 0; j < Math.floor(target.length)/2; j++){
      child.push(parentA[0][j]);
    }
    
    for(k = 0; child.length < target.length; j++){
      child.push(parentB[0][j])

    }
    
    for(i = 0; i < child.length; i++){
      if(Math.floor(Math.random() * mutateChance) == mutateChance - 1){
         child[i] = chars.charAt(Math.floor(Math.random() * chars.length))
         i = child.length
         }
      
    }
    pop.push(child)
  }  
  console.log(pop)
}
