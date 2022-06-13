const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const answerEls=document.querySelectorAll(".answer");

let currentQuizIdx=0;
const quiz = document.getElementById('quiz');
const a_text= document.getElementById('a_text');
const b_text= document.getElementById('b_text');
const c_text= document.getElementById('c_text');
const d_text= document.getElementById('d_text');
const question=document.getElementById('question');
const submitButton = document.getElementById('submit');

function loadQuiz() {
    const currentQuiz=quizData[currentQuizIdx];
    question.innerHTML=currentQuiz.question;
    a_text.innerHTML=currentQuiz.a;
    b_text.innerHTML=currentQuiz.b;
    c_text.innerHTML=currentQuiz.c;
    d_text.innerHTML=currentQuiz.d;



    // currentQuizIdx++;
}
let answer = undefined;
loadQuiz();
let score=0;
function getSelected() {
    
    
    let answer=undefined;
    answerEls.forEach((answerEl) =>{
        // console.log(answer.checked);
        if(answerEl.checked) {
            return answer=answerEl.id;

        }



        // console.log('hsdjshd');
    });
    return answer; 


}
function deselect() {
    answerEls.forEach ((answerEl) => {
        answerEl.checked=false;
    })
}

submitButton.addEventListener('click', () => {
    const option= getSelected();
    console.log(option);
    if(option) {
        if(option === quizData[currentQuizIdx].correct)score++;
        console.log(score);
        currentQuizIdx++;
        if(currentQuizIdx < quizData.length){
            deselect();
            loadQuiz();
        }
        
        else
        //show results
        quiz.innerHTML=`<h2 style="text-align:center; padding:1rem">You answered ${score} question(s) correct, out of ${quizData.length} questions</h2>
        <button onclick="location.reload()">Vault Back!</button>
        
        
        `
    }
    
})
