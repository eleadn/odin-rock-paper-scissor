function getComputerChoice()
{
    let choice = Math.random();

    if (choice < 0.33)
    {
        return "rock";
    }
    else if (choice < 0.66)
    {
        return "paper";
    }
    else
    {
        return "scissor";
    }
}

function getHumanChoice()
{
    return prompt("Choose rock, Paper, or scissor : ")
}

function playRound(humanChoice, computerChoice)
{
    humanChoice = humanChoice.toLowerCase();
    const result = `${humanChoice} vs ${computerChoice} : `;

    if (humanChoice === computerChoice)
    {
        console.log(result + "it's a draw.")
        return;
    }

    if (humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissor" && computerChoice === "paper" ||
        humanChoice === "rock" && computerChoice === "scissor")
    {
        console.log(result + "you win !")
        ++humanScore;
    }
    else
    {
        console.log(result + "you lose...")
        ++computerScore;
    }
}

let humanScore = 0;
let computerScore = 0;

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);