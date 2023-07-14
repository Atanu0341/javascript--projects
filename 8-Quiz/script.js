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
    },
    {
        question: "Which of the following is not a part of the human digestive system?",

        a: "Liver",
        b: "Pancreas",
        c: "Spleen",
        d: "Stomach",
        ans: "ans3"
    },
    {
        question: "The National school of Drama is situated in which of the following cities?",

        a: "Mumbai",
        b: "Kolkata",
        c: "New Delhi",
        d: "Chennai",
        ans: "ans3"
    },
    {
        question: "The 2017 Indian Premier League (IPL 2017) first match on 5 April, 2017 was held in ?",
        
        a: "Hyderabad",
        b: "Kolkata",
        c: "Mumbai",
        d: "Bangalore",
        ans: "ans1"
    },
    {
        question: "Which one of the following Cricketers has been declared by the ICC as 'Cricketer of the Twentieth Century' ?",

        a: "Kapil Dev",
        b: "Sunil Gavaskar",
        c: "Sachin Tendulkar",
        d: "Anil Kumble",
        ans: "ans3"
    },
    {
        question: "The largest and the oldest museum of India is located in the state/union territory of ",

        a: "Maharashtra",
        b: "West Bengal",
        c: "Tamil Nadu",
        d: "Delhi",
        ans: "ans2"
    },
    {
        question: "Which city is known as 'City of Blood' in India ?",

        a: "Bhopal",
        b: "Jaipur",
        c: "Yavatmal",
        d: "Tezpur",
        ans: "ans4"
    },
    {
        question: "The world famous 'Khajuraho' sculptures are located in ",

        a: "Madhya Pradesh",
        b: "Uttar Pradesh",
        c: "Rajasthan",
        d: "Maharashtra",
        ans: "ans1"
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

