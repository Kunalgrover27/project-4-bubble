var score=0;
var timer=60;
var hit=0;

function bubblemaker(){
var cluster="";

for(i=0;i<=169;i++){
    var num=Math.floor(Math.random()*10);
    cluster +=  `<div id="bubble"> ${num}  </div>`;
}

document.querySelector("#pbtm").innerHTML=cluster;
}

function runtimer(){
    var timeint= setInterval(function(){
        if(timer>0){
            timer --;
            document.querySelector("#time").textContent=timer;
        }
        else{
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML="<h1>GAME OVER</h1>"
        }
    },1000)
}

function newhit(){
     hit=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hit;
}

function incscore(){
      score +=10;
    document.querySelector("#score").textContent=score;
}

function matchhit(){
    document.querySelector('#pbtm').addEventListener("click",function(dets){
        var value= Number(dets.target.textContent);
        if(value === hit){
            incscore();
            newhit();
            bubblemaker();
        }
    })
}

runtimer();
bubblemaker();
newhit();
matchhit();