const startBtn = document.getElementsById('start-btn');
const nextBtn = document.getElementsById('next-btn');
const questionContainer = document.getElementsById('question-cont');
const questionElement = document.getElementsById('question');
const answerButtons = document.getElementsById('answer-buttons');
let shuffleQuestions, currentQuestionIndex;
startBtn.addEventListener('click', start);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function start() {
    startBtn.classList.add('hide');
    shuffleQuestions = questions.sort(() => Math.random() -0.5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    restState();
    showQuestion(shuffleQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');

        if (answer.correct) {
            button.dataSet.correct = answer.correct
        }

        button.addEventListener('click', selectAnswer)
        answerbtnsElement.appendChild(button)
    })
}

function restState(){
    clearStatClass(document.body);
    nextBtn.classList('hide')
    while (answerBtn.firstChild){
        answerBtn.removeChild(answerBtnElement.firstChild)
    } 
}