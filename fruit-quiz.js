// Fruit Game Questions for Kids
const questions = [
    {
        question: "Which fruit is this?",
        fruity: "apple",
        fruitName: "Apple",
        options: ["Apple", "Banana", "Orange"],
        correct: "Apple"
    },
    {
        question: "Which fruit is this?",
        fruity: "banana",
        fruitName: "Banana",
        options: ["Strawberry", "Banana", "Grape"],
        correct: "Banana"
    },
    {
        question: "Which fruit is this?",
        fruity: "orange",
        fruitName: "Orange",
        options: ["Lemon", "Orange", "Peach"],
        correct: "Orange"
    },
    {
        question: "Which fruit is this?",
        fruity: "strawberry",
        fruitName: "Strawberry",
        options: ["Raspberry", "Strawberry", "Cherry"],
        correct: "Strawberry"
    },
    {
        question: "Which fruit is this?",
        fruity: "grape",
        fruitName: "Grape",
        options: ["Grape", "Blueberry", "Plum"],
        correct: "Grape"
    },
    {
        question: "Which fruit is this?",
        fruity: "watermelon",
        fruitName: "Watermelon",
        options: ["Melon", "Watermelon", "Pumpkin"],
        correct: "Watermelon"
    },
    {
        question: "Which fruit is this?",
        fruity: "peach",
        fruitName: "Peach",
        options: ["Peach", "Apricot", "Plum"],
        correct: "Peach"
    },
    {
        question: "Which fruit is this?",
        fruity: "lemon",
        fruitName: "Lemon",
        options: ["Lime", "Lemon", "Apple"],
        correct: "Lemon"
    }
];

// SVG Fruit Graphics
const fruitSVGs = {
    apple: `<svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="110" rx="80" ry="85" fill="#DC143C"/>
        <ellipse cx="120" cy="90" rx="70" ry="75" fill="#FF4444"/>
        <ellipse cx="100" cy="130" rx="50" ry="55" fill="#FF6666" opacity="0.6"/>
        <rect x="95" y="20" width="10" height="35" fill="#8B4513"/>
        <ellipse cx="105" cy="50" rx="15" ry="8" fill="#228B22"/>
        <circle cx="70" cy="70" r="8" fill="#FFD700" opacity="0.4"/>
        <circle cx="130" cy="85" r="6" fill="#FFD700" opacity="0.3"/>
    </svg>`,
    
    banana: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M 40 150 Q 60 60 140 50 Q 160 48 170 60" stroke="#FFD700" stroke-width="45" fill="none" stroke-linecap="round"/>
        <path d="M 40 150 Q 60 60 140 50 Q 160 48 170 60" stroke="#FFED4E" stroke-width="40" fill="none" stroke-linecap="round"/>
        <path d="M 50 145 Q 70 65 145 55" stroke="#F4A460" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.5"/>
    </svg>`,
    
    orange: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="85" fill="#FF8C00"/>
        <circle cx="100" cy="100" r="80" fill="#FFA500"/>
        <circle cx="70" cy="70" r="8" fill="#FFD700" opacity="0.3"/>
        <circle cx="130" cy="75" r="7" fill="#FFD700" opacity="0.3"/>
        <circle cx="75" cy="130" r="8" fill="#FFD700" opacity="0.2"/>
        <circle cx="125" cy="125" r="6" fill="#FFD700" opacity="0.25"/>
        <line x1="100" y1="20" x2="100" y2="35" stroke="#228B22" stroke-width="4"/>
        <line x1="95" y1="25" x2="88" y2="32" stroke="#228B22" stroke-width="3"/>
        <line x1="105" y1="25" x2="112" y2="32" stroke="#228B22" stroke-width="3"/>
    </svg>`,
    
    strawberry: `<svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
        <path d="M 100 50 Q 75 70 70 110 Q 65 140 80 160 Q 100 180 120 160 Q 135 140 130 110 Q 125 70 100 50" fill="#E41B17"/>
        <path d="M 100 50 Q 75 70 70 110 Q 65 140 80 160 Q 100 180 120 160 Q 135 140 130 110 Q 125 70 100 50" fill="#FF1744" opacity="0.7"/>
        <circle cx="85" cy="85" r="4" fill="#FFD700"/>
        <circle cx="115" cy="85" r="4" fill="#FFD700"/>
        <circle cx="100" cy="100" r="4" fill="#FFD700"/>
        <circle cx="90" cy="115" r="4" fill="#FFD700"/>
        <circle cx="110" cy="115" r="4" fill="#FFD700"/>
        <circle cx="100" cy="130" r="4" fill="#FFD700"/>
        <path d="M 85 40 L 75 25 M 100 35 L 100 18 M 115 40 L 125 25" stroke="#228B22" stroke-width="3" fill="none" stroke-linecap="round"/>
        <line x1="85" y1="30" x2="95" y2="35" stroke="#228B22" stroke-width="2"/>
        <line x1="115" y1="30" x2="105" y2="35" stroke="#228B22" stroke-width="2"/>
    </svg>`,
    
    grape: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="80" r="18" fill="#8B008B"/>
        <circle cx="100" cy="80" r="16" fill="#9932CC"/>
        <circle cx="75" cy="105" r="18" fill="#8B008B"/>
        <circle cx="75" cy="105" r="16" fill="#9932CC"/>
        <circle cx="125" cy="105" r="18" fill="#8B008B"/>
        <circle cx="125" cy="105" r="16" fill="#9932CC"/>
        <circle cx="60" cy="130" r="18" fill="#8B008B"/>
        <circle cx="60" cy="130" r="16" fill="#9932CC"/>
        <circle cx="140" cy="130" r="18" fill="#8B008B"/>
        <circle cx="140" cy="130" r="16" fill="#9932CC"/>
        <circle cx="100" cy="150" r="18" fill="#8B008B"/>
        <circle cx="100" cy="150" r="16" fill="#9932CC"/>
        <line x1="100" y1="60" x2="100" y2="25" stroke="#8B4513" stroke-width="4"/>
        <path d="M 95 35 Q 85 30 80 40" stroke="#228B22" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M 105 35 Q 115 30 120 40" stroke="#228B22" stroke-width="3" fill="none" stroke-linecap="round"/>
    </svg>`,
    
    watermelon: `<svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="90" rx="85" ry="75" fill="#228B22"/>
        <ellipse cx="100" cy="90" rx="80" ry="70" fill="#32CD32"/>
        <ellipse cx="100" cy="90" rx="60" ry="55" fill="#FF0000"/>
        <ellipse cx="100" cy="90" rx="55" ry="50" fill="#FF6347"/>
        <circle cx="80" cy="80" r="5" fill="#000" opacity="0.7"/>
        <circle cx="100" cy="75" r="5" fill="#000" opacity="0.7"/>
        <circle cx="120" cy="85" r="5" fill="#000" opacity="0.7"/>
        <circle cx="90" cy="100" r="5" fill="#000" opacity="0.7"/>
        <circle cx="110" cy="105" r="5" fill="#000" opacity="0.7"/>
        <line x1="100" y1="20" x2="100" y2="35" stroke="#8B4513" stroke-width="3"/>
    </svg>`,
    
    peach: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="80" fill="#FDBCB4"/>
        <circle cx="100" cy="100" r="75" fill="#FFB6A3"/>
        <circle cx="100" cy="100" r="70" fill="#FFA894"/>
        <circle cx="70" cy="70" r="12" fill="#FFD700" opacity="0.4"/>
        <circle cx="130" cy="80" r="10" fill="#FFD700" opacity="0.3"/>
        <path d="M 100 25 Q 95 35 100 45 Q 105 35 100 25" fill="#8B4513"/>
        <ellipse cx="115" cy="32" rx="12" ry="10" fill="#228B22"/>
        <line x1="95" y1="60" x2="105" y2="70" stroke="#D2691E" stroke-width="1" opacity="0.5"/>
        <line x1="100" y1="55" x2="110" y2="75" stroke="#D2691E" stroke-width="1" opacity="0.5"/>
        <line x1="85" y1="70" x2="95" y2="85" stroke="#D2691E" stroke-width="1" opacity="0.5"/>
    </svg>`,
    
    lemon: `<svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="110" rx="70" ry="75" fill="#FFFF00"/>
        <ellipse cx="100" cy="110" rx="65" ry="70" fill="#FFFF99"/>
        <ellipse cx="75" cy="90" rx="20" ry="18" fill="#FFD700" opacity="0.4"/>
        <ellipse cx="125" cy="100" rx="18" ry="16" fill="#FFD700" opacity="0.3"/>
        <path d="M 100 20 Q 90 35 100 50 Q 110 35 100 20" fill="#228B22"/>
        <path d="M 100 20 Q 90 35 100 50 Q 110 35 100 20" fill="#32CD32" opacity="0.6"/>
        <ellipse cx="110" cy="28" rx="10" ry="8" fill="#228B22"/>
        <path d="M 100 185 L 95 200 L 100 195 L 105 200 Z" fill="#8B4513" opacity="0.5"/>
        <path d="M 95 175 Q 90 185 100 190" stroke="#228B22" stroke-width="2" fill="none" opacity="0.5"/>
    </svg>`
};


let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    document.getElementById('resultBox').style.display = 'none';
    document.getElementById('questionBox').style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    
    // Display fruit SVG
    const fruitDisplay = document.getElementById('fruitEmoji');
    fruitDisplay.innerHTML = fruitSVGs[question.fruity];
    
    document.getElementById('questionNumber').textContent = currentQuestionIndex + 1;
    document.getElementById('score').textContent = score;
    
    const optionsBox = document.getElementById('optionsBox');
    optionsBox.innerHTML = '';
    selectedAnswer = null;
    
    // Shuffle options
    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
    
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerHTML = `<span class="btn-text">${option}</span>`;
        button.onclick = () => selectAnswer(option, button);
        optionsBox.appendChild(button);
    });
    
    document.getElementById('nextBtn').style.display = 'none';
    
    // Auto-speak the fruit name
    setTimeout(() => speakFruitName(), 500);
}

function selectAnswer(answer, button) {
    selectedAnswer = answer;
    
    // Remove previous selection styling
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
    });
    
    const correct = questions[currentQuestionIndex].correct;
    
    if (answer === correct) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('incorrect');
        // Show correct answer
        document.querySelectorAll('.option-btn').forEach(btn => {
            if (btn.textContent === correct) {
                btn.classList.add('correct');
            }
        });
    }
    
    document.getElementById('score').textContent = score;
    document.getElementById('nextBtn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('questionBox').style.display = 'none';
    document.getElementById('resultBox').style.display = 'block';
    document.getElementById('nextBtn').style.display = 'none';
    
    const percentage = Math.round((score / questions.length) * 100);
    let emoji = '😊';
    let message = '';
    
    if (percentage === 100) {
        emoji = '⭐⭐⭐';
        message = 'Perfect! You are a FRUIT MASTER! Amazing!';
    } else if (percentage >= 75) {
        emoji = '🌟';
        message = 'Excellent! You are a Fruit Super Star!';
    } else if (percentage >= 50) {
        emoji = '👍';
        message = 'Great job! You know many fruits!';
    } else {
        emoji = '😊';
        message = 'Good try! You learned lots of fruits!';
    }
    
    document.getElementById('finalScore').innerHTML = `
        <p style="font-size: 3em; margin: 20px 0;">${emoji}</p>
        <p style="font-size: 1.3em; margin: 20px 0;">${message}</p>
        <p style="font-size: 1.5em; font-weight: bold;">You got <span style="color: #FFD700;">${score}/${questions.length}</span> correct!</p>
    `;
}

function restartQuiz() {
    startQuiz();
}

function speakFruitName() {
    const question = questions[currentQuestionIndex];
    const fruitName = question.fruitName;
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    // Create speech synthesis
    const utterance = new SpeechSynthesisUtterance(fruitName);
    utterance.rate = 0.8; // Slower for kids
    utterance.pitch = 1.2; // Slightly higher pitch
    utterance.volume = 1.0;
    
    window.speechSynthesis.speak(utterance);
}

// Start quiz when page loads
window.onload = startQuiz;
