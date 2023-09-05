let showDownButton = document.querySelectorAll(".showDownButton");
let hiddenPara = document.querySelectorAll(".hiddenPara");
let heads =  document.querySelectorAll(".heads");

let show = true ;
let buttonCount = 0 ;
setTimeout
const showDownPara = ( ) => {
    for(let i = 0 ; i<hiddenPara.length ; i++){
        if(i == buttonCount){
            hiddenPara[i].style.display = "block";
            heads[i].classList.add('animate');
            showDownButton[i].innerHTML='<span class="material-symbols-outlined">close</span>';

            
        }
        show = false ;
    }
   
}

const hideDownPara = () => {
    for(let i = 0 ; i<hiddenPara.length ; i++){
        if(i == buttonCount){
            hiddenPara[i].style.display = "none";
            heads[i].classList.remove('animate');
            showDownButton[i].innerHTML=' <span class="material-icons">keyboard_arrow_down</span>';

        }
        show = true ;
    }
    
}
for(let i = 0 ; i<showDownButton.length ; i++ ){
    showDownButton[i].addEventListener('click' , function(){
        buttonCount = i ;
            if(show == true){
                showDownPara();
            }else if(show == false){
                hideDownPara();
            }

    });
}

