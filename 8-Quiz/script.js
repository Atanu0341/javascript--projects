const ques = [
    {
        question: "What is the pH value of the human body?",

        a: "9.2 to 9.8",
        b: "7.0 to 7.8",
        c: "6.1 to 6.3",
        d: "5.4 to 5.6",
        ans: "ans2"
    },
    {
        question: "Which of the following are called Key Industrial animals?",

        a: "Producers",
        b: "Tertiary consumers",
        c: "Primary consumers",
        d: "None of these",
        ans: "ans3"
    },
    {
        question: "Which of the given amendments made it compulsory for the president to consent to the constitutional Amendment bills?",

        a: "27th",
        b: "29th",
        c: "24th",
        d: "22th",
        ans: "ans3"
    }
];

const question = document.querySelector('.question');

const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
const loadQuestion = (questionCount) => {
    const questionList = ques[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion(questionCount); //calling the function

const getCheckAnswer = () => {
    let answer;
    answers.forEach((currentAnsElement) => {
        if (currentAnsElement.checked) {
            answer = currentAnsElement.id;
        }
    });
    return answer;
}

resetInputClick = () => {
    answers.forEach((currentAnsElement) => {
        currentAnsElement.checked = false;
    });
}

const options = document.querySelectorAll("label");
let score = 0;

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    if (checkedAnswer === ques[questionCount].ans) {
        score++;
    };
    questionCount++;
    resetInputClick();

    if (questionCount < ques.length) {
        loadQuestion(questionCount);
    }
    else {
        showScore.innerHTML = `
        <h3>You scored ${score}/${ques.length} ✌️ </h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');
    }
});

