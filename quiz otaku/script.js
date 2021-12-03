const quizData = [
    {
        question: "Quem é o Pai de Naruto Uzumaki?",
        a: "Uchiha Madara",
        b: "Jiraya",
        c: "Minato Namikaze",
        d: "Hiruzen Sarutobi",
        correct: "c",
    },
    {
        question: "Quem é o Pai de Monkey D. Luffy?",
        a: "Roronoa Zoro",
        b: "Tony Tony Choper",
        c: "Donquixote Doflamingo",
        d: "Monkey D. Dragon",
        correct: "d",
    },
    {
        question: "Qual é o nome do Personagem do Anime Tokyo Ravengers?",
        a: "Mikey",
        b: "Takemichy",
        c: "Draken",
        d: "Zoro",
        correct: "b",
    },
    {
        question: "Como se chama a Terceira Espada de Roronoa Zoro?",
        a: "Emma",
        b: "Devoradora",
        c: "Shisui",
        d: "Scar",
        correct: "a",
    }
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) =>{
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};

const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () =>{
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct)
        score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `<h2>Respondeste ${score}/${quizData.length} Perguntas Certas</h2>
            <button onclick="history.go(0)>Jogar Denovo</button>`
        }
    }
});