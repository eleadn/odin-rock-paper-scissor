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
        return 0;
    }

    if (humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissor" && computerChoice === "paper" ||
        humanChoice === "rock" && computerChoice === "scissor")
    {
        console.log(result + "you win !")
        return 1;
    }
    else
    {
        console.log(result + "you lose...")
        return -1;
    }
}

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; ++i)
    {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        switch (playRound(humanSelection, computerSelection))
        {
            case 1:
                ++humanScore;
                break;
            case -1:
                ++computerScore;
                break;
        }
    }

    if (humanScore > computerScore)
    {
        console.log("Congrats ! You won !");
    }
    else
    {
        console.log("Sorry, you lost...");
    }
}

playGame();