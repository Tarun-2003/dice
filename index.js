var randomNumber1 = Math.floor(Math.random()*6)+1;
var diceRandom ="images/dice"+randomNumber1+".png";
var final = document.querySelectorAll("img")[0];
 var output = final.setAttribute("src",diceRandom);

 var randomNumber2= Math.floor(Math.random()*6)+1;
 var diceRandom2 ="images/dice"+randomNumber2+".png";
 var final2 = document.querySelectorAll("img")[1];
  var output = final2.setAttribute("src",diceRandom2);
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 wins"
}
else if(randomNumber2>randomNumber1)
{
  document.querySelector("h1").innerHTML="Player 2 wins"
}
else
{
  document.querySelector("h1").innerHTML="Draw"
}
