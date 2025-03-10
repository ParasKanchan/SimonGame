let started =false;
let level=0;

let gameSeq=[];
let userSeq=[];

let btns = ["red","green","yellow","purple"];


document.addEventListener("keypress",function(event){
    if(started==false){
        started=true;
        console.log("Game has started")

        levelUp();
    }
   
});

function btnFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

let h2 = document.querySelector("h2")


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    
    
    gameSeq.push(randColor);
    btnFlash(randbtn);
}


function  userBtnFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250);
}


function checkBtn(idx){
    

    if(userSeq[idx]==gameSeq[idx]){
        console.log("Same Value")
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp(),1000);
        }
    }else{
      //  h2.innerText="Game Over! press any key to start";
      h2.innerHTML=`Game Over! Your score was <b>${level}</b>.<br> Press any  key to start.`
      document.querySelector("body").style.backgroundColor="white";
      setTimeout(function(){
        document.querySelector("body").style.backgroundcolor="red";
      },250)
        reset();
    }
}


function btnPress(){
    let btn = this;//'this' tells which btn was pressed
    console.log(`btn was pressed`);
    console.log(btn);
    
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    userBtnFlash(btn);

    checkBtn(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    level=0;
    userSeq=[];
}