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

let humanScore = 0;
let computerScore = 0;