"use strict "
let paragrapes_lines = document.getElementsByClassName('paragrapes_lines');
let text_area = document.getElementsByClassName('text_area');
let start_done_btn = document.getElementsByClassName('start_done_btn');
let resultField= document.getElementsByClassName('resultField')[0];
let textShow =  paragrapes_lines [0];
let textWrite = text_area[0];
let textSubmit = start_done_btn[0];
let resultTable = document.getElementsByClassName('resultTable')[0];
let results = document.getElementsByClassName('results');

let storedLines = [
    '“Don’t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.”',
    '"Dream, dream, dream. Dreams transform into thoughts and thoughts result in action."',
    '"To succeed in your mission, you must have single-minded devotion to your goal."',
    '"If you fail, never give up because FAIL means "First Attempt In Learning".',
    'Creativity is seeing the same thing but thinking differently',
    '"Failure will never overtake me if my determination to succeed is strong enough."',
    '"All of us do not have equal talent. But , all of us have an equal opportunity to develop our talents.'

];
let count = -1 ;
let startdate, endDate ;
let correctMatchingWords = 0 ;

const showText = () => {
    correctMatchingWords = 0 ;
     startdate = new Date().getTime();
    count++ ;
    if(count >= storedLines.length){
        count = 0 ;
    }
    textShow.innerHTML = storedLines[count]; 
    resultTable.style.display = 'none';
    resultField.innerHTML = 'Click on Start , just type in text feild the same paragraphs/lines provided in paragraphs/lines box and click on done to get your results.';
    textSubmit.innerHTML = 'Done';
    
}

const CheckText = () => {
        let x =  textShow.innerHTML.split(' ');
        let y = textWrite.value.split(' ');
       
        x.forEach(function(item ,index){
            let yValues = y[index];
            if(item == yValues){ 
                correctMatchingWords++ ;
            }
        
        });
        let errorWords = (x.length - correctMatchingWords);

        endDate =  new Date().getTime();
    
       let totalTimetaken = ((endDate - startdate)/1000)/60;
        let totalTimetaken_decimal =  totalTimetaken.toFixed(2);
        if(totalTimetaken_decimal < 1 ){
            totalTimetaken_decimal += "sec";
        } else if(totalTimetaken_decimal< 60){
            totalTimetaken_decimal += "minutes";
        }else{
            totalTimetaken_decimal += "hours";
        }

    resultField.innerHTML = '';
    resultTable.style.display = 'block';
    results[0].innerHTML = x.length ;
    results[1].innerHTML = y.length;
    results[2].innerHTML = correctMatchingWords;
    results[3].innerHTML = errorWords;
    results[4].innerHTML = totalTimetaken_decimal;

    textSubmit.innerHTML = 'Start' ;

}
   
textSubmit.addEventListener('click',function(){
    if(textSubmit.innerHTML == 'Start'){
        textWrite.value = '' ;
        showText();
    }else if(textSubmit.innerHTML == 'Done'){
        CheckText();
    }
});




