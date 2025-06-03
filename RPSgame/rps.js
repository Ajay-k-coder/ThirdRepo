
let userscore = 0;
let compscore = 0;
let userchoice = 0;
let computerchoice = 0;

let button = document.querySelectorAll(".btn");
let scissor = document.querySelector("#scissorimg");
let yourchoice = document.getElementById("yourschoice")
let computerschoice = document.getElementById("compschoice")
let computerScore =document.getElementById("computerscore");
let userScore= document.getElementById("userscore");
let result = document.getElementById("result");
let reStart = document.getElementById("restart");
// console.log(computerScore.innerText);
// console.log(userScore.innerText);

let imagestore = ["image/scissors.png","image/paper.png","image/rock.png"]

function compchoice(){
    let num = Math.floor(Math.random()*3);
    computerschoice.src = imagestore[num];
    if(num == 0){
        return "scissors";
    }else if(num == 1){
        return "paper";
    }else{
        return "rock";
    }

}


button.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(e.srcElement.className == "scissors"){
            // console.log("click");
            yourchoice.src = "image/scissors.png";
            // userscore =+ 1;

        }
        else if(e.srcElement.className == "paper"){
            yourchoice.src = "image/paper.png";
            // userscore = 2;

        }
        else if(e.srcElement.className == "rock"){
            yourchoice.src="image/rock.png";
            userchoice = e.srcElement.className;
            // userscore = 3;
            
        }else {
            yourchoice.src="image/download (3).jpg";
        }
         

        computerchoice = compchoice();
        // console.log(`userscore = ${userscore}`);
        // console.log(`computerscore = ${compscore}`);
        userchoice = e.srcElement.className;
        // console.log(userchoice);
        score();
        Result();   

    })
})

function score(){

    if(computerchoice == "scissors"){
        if(userchoice == "paper"){
            compscore += 1;
            computerScore.innerText = compscore;
            console.log("computerwin")

        }else if(userchoice == "rock"){
            userscore += 1;
            userScore.innerText = userscore;
            console.log("userwin");
        }
    } else if(computerchoice == "paper"){
        if(userchoice == "rock"){
            compscore += 1;
            computerScore.innerText = compscore;
            console.log("computerwin")

        }else if(userchoice == "scissors"){
            userscore += 1;
            userScore.innerText = userscore;
            console.log("userwin");

        }

    }else if(computerchoice == "rock"){
        if(userchoice == "scissors"){
            compscore += 1;
            computerScore.innerText = compscore;
            console.log("computerwin")

        }else if(userchoice == "paper"){
            userscore += 1;
            userScore.innerText = userscore;
            console.log("userwin");

        }
    }

}

function Result(){
    if(userscore > compscore){
        result.innerText = "You win";
    }else if( userscore < compscore){
        result.innerText = "Comp. win";
    }else{
        result.innerText = "Draw";
    }

}

reStart.addEventListener("click", ()=>{
        location.reload();
    
})