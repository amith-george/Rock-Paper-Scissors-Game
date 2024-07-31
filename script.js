let pCount = 0
let cCount = 0;
let bCount = 0;
let Pchoice;
let Rchoice;

let score = document.querySelector("#score");
let outcome = document.querySelector("#result");
let result = document.querySelector("#final");
let input = document.querySelector("#rounds");
let submit = document.querySelector("#submit");
let rCount = document.querySelector("#rCount");


submit.addEventListener("click", () => {
    let rounds = input.value;
    input.value='';


let rockbutt = document.querySelector("#rockbutt");
rockbutt.addEventListener("click", () => {
    Pchoice= "rock";
    bCount++;
    fiveround();
});

let paperbutt = document.querySelector("#paperbutt");
paperbutt.addEventListener("click", () => {
    Pchoice = "paper";
    bCount++;
    fiveround();
});

let scissorbutt = document.querySelector("#scissorbutt");
scissorbutt.addEventListener("click", () => {
    Pchoice = "scissors";
    bCount++;
    fiveround();
});


function getComputerChoice() {
    let rnum = Math.floor(Math.random()*3);
    if (rnum == 0) {
        return "rock";
    }
    else if (rnum == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playGame(pchoice,cchoice){
    if (pchoice == "rock" && cchoice == "paper")
    {
        outcome.textContent = "You just got beat! The play made by you and the AI was "+pchoice+" and "+cchoice+".";
        cCount++;
        score.textContent = pCount+"     -     "+cCount+"      (Round "+bCount+")";
    }
    else if (pchoice == "paper" && cchoice == "scissors")
    {
        outcome.textContent = "You just got beat! The play made by you and the AI was "+pchoice+" and "+cchoice+".";
        cCount++;
        score.textContent = pCount+"     -     "+cCount+"      (Round "+bCount+")";
    }
    else if (pchoice == "scissors" && cchoice == "rock")
    {
        outcome.textContent = "You just got beat! The play made by you and the AI was "+pchoice+" and "+cchoice+".";
        cCount++;
        score.textContent = pCount+"     -     "+cCount+"      (Round "+bCount+")";
    }
    else if (pchoice == cchoice)
    {
        outcome.textContent = "You tied with the AI! The play made by you and the AI was "+pchoice+" and "+cchoice+".";
        score.textContent = pCount+"     -     "+cCount+"      (Round "+bCount+")";
    }
    else {
        outcome.textContent = "You just won! The play made by you and the AI was "+pchoice+" and "+cchoice+".";
        pCount++;
        score.textContent = pCount+"     -     "+cCount+"      (Round "+bCount+")";
    }
}


function fiveround(){
    if (bCount > rounds)
    {
        if (pCount == cCount){
            outcome.textContent = "You tied with the AI!";
        }
        else if (pCount > cCount)
        {
            outcome.textContent = "You won against the AI!";
        }
        else {
            outcome.textContent = "You lost against the AI!";
        }
    }
    else {
        Rchoice = getComputerChoice();    
        playGame(Pchoice,Rchoice);
    }

}
});

input.focus();


