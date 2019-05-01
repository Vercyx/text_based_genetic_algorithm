function setup() {
  let chars = 'abcdefghijklmnopqrstuvwxyz ';
  let pop = [];
  let DNA = [];
  let target = 'to be or not to be';
  let members = 10;
  let result = '';
  
  for(i = 0; i < members; i++){
    for(z = 0; z < target.length; z++){
      DNA.push(chars.charAt(Math.floor(Math.random() * chars.length)))
    }
    
    
    
    pop.push(DNA);
    console.log(DNA);
  }
  
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
