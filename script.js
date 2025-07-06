function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('user-choice').textContent = userChoice;
    document.getElementById('computer-choice').textContent = computerChoice;

    let result = getResult(userChoice, computerChoice);
    document.getElementById('result').textContent = result;
}

function getResult(user, computer) {
    if (user === computer) return "It's a Tie!";
    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return "You Win! 🎉";
    }
    return "You Lose! 😢";
}
