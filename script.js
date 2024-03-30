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

let pCount = 0;
let cCount = 0;
console.log(typeof(pCount));
let Pchoice = prompt("Enter your choice: ");
Pchoice = Pchoice.toLowerCase();
let Rchoice = getComputerChoice();
playGame(Pchoice,Rchoice);