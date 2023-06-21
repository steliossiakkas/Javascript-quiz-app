const questions = [
    {
        question: "Which is the capital city of Portugal?" ,
        answers: [
            {text: "Algarve", correct: false},
            {text: "Braga", correct: false},
            {text: "Faro", correct: false},
            {text: "Lisbon", correct: true},
        ]
    },
    {
        question: "Which is the capital city of Spain?" ,
        answers: [
            {text: "Barcelona", correct: false},
            {text: "Ibiza", correct: false},
            {text: "Madrid", correct: true},
            {text: "Tenerife", correct: false},
        ]
    },
    {
        question: "Which is the capital city of Italy?" ,
        answers: [
            {text: "Milan", correct: false},
            {text: "Rome", correct: true},
            {text: "Turin", correct: false},
            {text: "Naples", correct: false}
        ]
    },
    {
        question: "Which is the capital city of England?" ,
        answers: [
            {text: "London", correct: true},
            {text: "Manchester", correct: false},
            {text: "Birmingham", correct: false},
            {text: "Liverpool", correct: false},
        ]
    },
    {
    question: "Which is the capital city of France?" ,
    answers: [
        {text: "Nice", correct: false},
        {text: "Marseille", correct: false},
        {text: "Lyon", correct: false},
        {text: "Paris", correct: true},
    ]
   },
   {
    question: "Which is the capital city of Germany?" ,
    answers: [
        {text: "Munich", correct: false},
        {text: "Berlin", correct: true},
        {text: "Hamburg", correct: false},
        {text: "Cologne", correct: false},
    ]
   },
   {
    question: "Which is the capital city of Poland?" ,
    answers: [
        {text: "Krakow", correct: false},
        {text: "Gdasnk", correct: false},
        {text: "Warsaw", correct: true},
        {text: "Lublin", correct: false},
    ]
   },
   {
    question: "Which is the capital city of Sweden?" ,
    answers: [
        {text: "Gothenburg", correct: false},
        {text: "Uppsala", correct: false},
        {text: "Malmo", correct: false},
        {text: "Stockholm", correct: true},
    ]
   },
   {question: "Which is the capital city of Switzerland?" ,
   answers: [
       {text: "Geneva", correct: false},
       {text: "Basel", correct: false},
       {text: "Zurich", correct: false},
       {text: "Bern", correct: true},
   ]
},
{
    question: "Which is the capital city of Belgium?" ,
    answers: [
        {text: "Antwerp", correct: false},
        {text: "Ghent", correct: false},
        {text: "Brussels", correct: true},
        {text: "Charleroi", correct: false},
    ]
},
        
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }

}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
     handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
