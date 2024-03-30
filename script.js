let pCount = 0
let cCount = 0;
let bCount = 0;
let Pchoice;
let Rchoice;

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
        console.log("You just got beat! The play made by you and the AI was "+pchoice+" and "+cchoice+".");
        cCount++;
    }
    else if (pchoice == "paper" && cchoice == "scissors")
    {
        console.log("You just got beat! The play made by you and the AI was "+pchoice+" and "+cchoice+".");
        cCount++;
    }
    else if (pchoice == "scissors" && cchoice == "rock")
    {
        console.log("You just got beat! The play made by you and the AI was "+pchoice+" and "+cchoice+".");
        cCount++;
    }
    else if (pchoice == cchoice)
    {
        console.log("You tied with the AI! The play made by you and the AI was "+pchoice+" and "+cchoice+".");
    }
    else {
        console.log("You just won! The play made by you and the AI was "+pchoice+" and "+cchoice+".");
        pCount++;
    }
}


function rock(){
    Pchoice = "rock";
    bCount++;
    fiveround();
}


function paper(){
    Pchoice = "paper";
    bCount++;
    fiveround();
}

function scissors(){
    Pchoice = "scissors";
    bCount++;
    fiveround();
}



function fiveround(){

    if (bCount > 5)
    {
        if (pCount == cCount){
            console.log("You tied with the AI with the score "+pCount+" and "+cCount+"!");
        }
        else if (pCount > cCount)
        {
            console.log("You won against the AI with the score "+pCount+" and "+cCount+"!");
        }
        else {
            console.log("You lost against the AI with the score "+pCount+" and "+cCount+"!");
        }
    }
    else {
        Rchoice = getComputerChoice();    
        playGame(Pchoice,Rchoice);
    }

}



