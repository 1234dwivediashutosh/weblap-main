const flashcardsData = [
    { q: "What does HTML stand for?", a: "HyperText Markup Language" },
    { q: "What does CSS stand for?", a: "Cascading Style Sheets" },
    { q: "What is the result of '2' + 2 in JS?", a: "'22' (String concatenation)" },
    { q: "What does API stand for?", a: "Application Programming Interface" },
    { q: "Is JavaScript single-threaded?", a: "Yes, it is single-threaded." }
];

let currentIndex = 0;
let isAnswerShowing = false;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const counterEl = document.getElementById("counter");

function loadCard(index) {
    questionEl.innerText = flashcardsData[index].q;
    answerEl.innerText = flashcardsData[index].a;
    answerEl.classList.add("hidden");
    isAnswerShowing = false;
    counterEl.innerText = `${index + 1} / ${flashcardsData.length}`;
}

function flipCard() {
    isAnswerShowing = !isAnswerShowing;
    if (isAnswerShowing) {
        answerEl.classList.remove("hidden");
    } else {
        answerEl.classList.add("hidden");
    }
}

function nextCard() {
    if (currentIndex < flashcardsData.length - 1) {
        currentIndex++;
        loadCard(currentIndex);
    }
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        loadCard(currentIndex);
    }
}

// Initial load
loadCard(currentIndex);