let submitAnswers = document.getElementsByClassName('submitAnswers')[0];
let result = document.getElementsByClassName('result');
let answersClass = document.getElementsByClassName('answersClass');
let questions = document.getElementsByClassName('questions');
let optionA = document.getElementsByClassName('optionA');
let optionB = document.getElementsByClassName('optionB');
let optionC = document.getElementsByClassName('optionC');
let optionD = document.getElementsByClassName('optionD');
let radioInput = document.getElementsByTagName('input');

let question = ['question 1 - Which is red ? ' , 'question 2 - Which is green ? ' , 'question 3 - Which is purple ? ' , 'question 4 - Which is pink ? ' , ' question 5 - Which is yellow ? ' ];
let optionsA = ['red','red','red','red','yellow'];
let optionsB = ['pink','green','green','green','green'];
let optionsC = ['blue','blue','blue','pink','pink'];
let optionsD = ['grey','grey','purple','purple','purple'];

const showQuestions = () => {
    for(let i=0 ; i<questions.length ; i++){
        questions[i].innerHTML =  question[i];
        optionA[i].innerHTML = optionsA[i];
        optionB[i].innerHTML = optionsB[i];
        optionC[i].innerHTML = optionsC[i];
        optionD[i].innerHTML = optionsD[i];
    }
}
showQuestions();

const checkAnswers = () => {
    for(let i=0 ;i<answersClass.length;i++){
        if(answersClass[i].checked  ){
            result[i].innerHTML='correct';
            result[i].style.color='green';
        
        }else{
            result[i].innerHTML='wrong';
            result[i].style.color='red';
           
        }
    }
    submitAnswers.innerHTML = 'restart';

}

const clearAll = () => {
        for(let i=0 ;i<radioInput.length;i++){
            radioInput[i].checked = false ;
           
        }
        for(let i=0 ;i<answersClass.length;i++){
                result[i].innerHTML='';
        }
        submitAnswers.innerHTML = 'submit';
}


submitAnswers.addEventListener('click',function() {
    if(this.innerHTML == 'submit'){
        checkAnswers();
    }else if(this.innerHTML == 'restart'){
        clearAll();
    }
  
})




