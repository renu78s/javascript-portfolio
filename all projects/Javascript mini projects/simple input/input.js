let onlyNumbers = document.getElementsByClassName('only_numbers');
let showInput = document.getElementsByClassName('show_input');

onlyNumbers[0].addEventListener('keyup',()=>{
    let inputValue =  onlyNumbers[0].value ;

    if(inputValue < 0  ){
        showInput[0].innerHTML = 'only positive numbers';
    }else if(inputValue == '' ){
        showInput[0].innerHTML = '';
    }
    else{
        showInput[0].innerHTML = '';
        if(inputValue%2 == 0 ){
            for(let i=2 ; i<=6 ; i++){
                if(i%2 == 0){
                let threeEvenValues = parseInt(inputValue) + i;
                let creatingSpan = document.createElement('span');
                creatingSpan.innerHTML = `${threeEvenValues}  , `;
                showInput[0].appendChild(creatingSpan);
                
                }
            } 
        }
        else{
            for(let i=2 ; i<=8 ; i++){
                if(i%2 != 0){
                let threeOddValues = parseInt(inputValue) + i-1;
                let creatingSpan = document.createElement('span');
                creatingSpan.innerHTML = `${threeOddValues}  , `;
                showInput[0].appendChild(creatingSpan);
            
                }
            }
        }
    }
})