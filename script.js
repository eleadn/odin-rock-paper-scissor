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

function playRound(humanChoice, computerChoice)
{
    if (humanChoice === computerChoice)
    {
        return 0;
    }

    if (humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissor" && computerChoice === "paper" ||
        humanChoice === "rock" && computerChoice === "scissor")
    {
        return 1;
    }
    else
    {
        return -1;
    }
}

function endGame()
{
    if (humanScore === 5)
    {
        alert("Good job ! You won !");
    }
    else
    {
        alert("Sorry, you lose...");
    }

    humanScore = 0;
    computerScore = 0;
    initDisplays();
}

function onChoiceButtonClick(button)
{
    const computerChoice = getComputerChoice();
    const humanChoice = button.id.slice(1, button.id.length);
    const result = playRound(humanChoice, computerChoice);
    updateRoundResult(result, humanChoice, computerChoice);
    if (humanScore >= winningScore || computerScore >= winningScore)
    {
        endGame();
    }
}

function updateRoundResult(result, humanChoice = "", computerChoice = "")
{
    const resultText = `${humanChoice} vs ${computerChoice} : `;

    switch (result)
    {
        case 1:
            resultDisplay.textContent = resultText + "You win !";
            ++humanScore;
            updateHumanScore();
            break;
        case -1:
            resultDisplay.textContent = resultText + "You lose...";
            ++computerScore;
            updateComputerScore();
            break
        case 0:
            resultDisplay.textContent = resultText + "It's a draw.";
            break;
        default:
            resultDisplay.textContent = "...";
            break;
    }
}

function updateHumanScore()
{
    humanScoreDisplay.textContent = `Your score: ${humanScore}`;
}

function updateComputerScore()
{
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
}

function initChoiceButton(button)
{
    button.addEventListener("click", context => onChoiceButtonClick(context.target));
}

function initDisplays()
{
    updateRoundResult();
    updateHumanScore();
    updateComputerScore();
}

const buttons = document.querySelectorAll(".choiceButton");
const humanScoreDisplay = document.querySelector(".humanScore");
const computerScoreDisplay = document.querySelector(".computerScore");
const resultDisplay = document.querySelector(".roundResult");

let humanScore = 0;
let computerScore = 0;

const winningScore = 5;

buttons.forEach(button => initChoiceButton(button));
initDisplays();