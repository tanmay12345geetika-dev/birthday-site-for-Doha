// Confetti effect on button click
document.getElementById('confetti-btn').addEventListener('click', function() {
    // Simple confetti simulation (you can replace with a library like canvas-confetti for better effects)
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
});

// Love meter slider
document.getElementById('love-slider').addEventListener('input', function() {
    document.getElementById('love-value').textContent = this.value + '%';
});

// Quiz interaction
document.querySelectorAll('.quiz-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const result = document.getElementById('quiz-result');
        if (this.dataset.answer === 'Your Everything') {
            result.textContent = 'Correct! You know me so well my love ! 💖';
            result.style.color = 'green';
        } else {
            result.textContent = 'Oops! Try again, Cutie ! 😘';
            result.style.color = 'red';
        }
    });
});