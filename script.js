// script.js
function nextQuestion(questionNumber) {
    document.querySelector(`#question${questionNumber - 1}`).classList.add('hidden');
    document.querySelector(`#question${questionNumber}`).classList.remove('hidden');
}

document.getElementById('questionnaire').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const secondDate = document.querySelector('input[name="secondDate"]:checked').value;
    
    if (secondDate === 'yes') {
        document.getElementById('animation-container').classList.remove('hidden');
        showHearts();
    } else {
        alert('Thank you for your feedback!');
    }
});

function showHearts() {
    const container = document.querySelector('.hearts');
    container.innerHTML = ''; // Clear any existing hearts
    for (let i = 0; i < 100; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 5 + 3}s`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(heart);
    }
}
