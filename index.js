let x;
random = Math.floor(Math.random()*100)+1;
let count = 0;

function generator(x){
  return (Math.floor(Math.random()*100)+1);
}
function reapted(){
  count +=1;

  hello = document.getElementById("inputt");
  let c = "Hint: The Number Is Higher Than " + hello.value;
  let d = "Hint: The Number Is Lower Than " + hello.value;
  let e = "Result: You Won";
  let f = "Result: You Won";
  let g = "Hint: You Got The Number";
  let j = "You Lost";
  let k = "Hint: You didn't Get The Number";
  let p = "GAME OVER !!!" ;
  let q = "WINNER !!!" ;

  if(hello.value < random && hello.value > 0){
    document.getElementById("Higher").innerHTML = c;
  }
  else if(hello.value == random){
    document.getElementById("result").innerHTML = e;
    document.getElementById("Higher").innerHTML = g;
    document.getElementById("answer").innerHTML = random;
    document.getElementById("heading").innerHTML = q;
  }
  else if(hello.value > random && hello.value <= 100){
    document.getElementById("Higher").innerHTML = d;
  }
  else if(hello.value > 100 || hello.value < 0){
    window.prompt("DUDE!!! the game is between 1 and 100");
    document.getElementById("Higher").innerHTML = "DUDE!!! the game is b/n 1 and 100";
    count -=1;
  }

  if(count >= 7){
    document.getElementById("result").innerHTML = j;
    document.getElementById("answer").innerHTML = random;
    document.getElementById("Higher").innerHTML = k;
    document.getElementById("heading").innerHTML = p;
  }
  else if(count == 6 && hello.value == random){
    document.getElementById("result").innerHTML = e;
    document.getElementById("Higher").innerHTML = g;
    document.getElementById("answer").innerHTML = random;
    document.getElementById("heading").innerHTML = q;
  }
  else if(count == 6 && hello.value != random){
    document.getElementById("result").innerHTML = j;
    document.getElementById("answer").innerHTML = random;
    document.getElementById("Higher").innerHTML = k;
    document.getElementById("heading").innerHTML = p;
  } 

  if (count == 5 && hello.value != random){
    window.prompt(" CAUTION: You Have Only 1 Guess Left")
  }
  if(hello.value==""){
    count -=1;
    document.getElementById("Higher").innerHTML = "Hint: Please Insert Your Number!!!";
  }

  document.getElementById("ge").innerHTML = 6 - Number(count)

  hello.value = "";
}
document.getElementById("submit").onclick = function(){
  reapted();
}
document.getElementById("restart").onclick = function(){
  random = generator(x);
  document.getElementById("Higher").innerHTML = "Hint: ------------------------";
  count = 0;
  document.getElementById("ge").innerHTML = 6;
  document.getElementById("answer").innerHTML = "-";
  document.getElementById("heading").innerHTML = "NEW GAME";
  document.getElementById("result").innerHTML = "Result: ---------";
}
