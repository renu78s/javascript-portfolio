let user = document.getElementById('username');
let secure = document.getElementById('password');
let names = document.getElementById('names');
let pass = document.getElementById('pass');
let correctUsername = "renu" ;
let correctPassword = 123 ;
let demo = 1 ;
let done = 1 ;
//email related details
let mail = document.getElementById('email');
let mailError = document.getElementById('mailError');
let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
let regx2 = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)?$/
let emailCode = 1;

function submitall(){
    

    if(user.value != correctUsername ){
        names.innerHTML='invalid';
        names.style.display = 'block';
        demo=0;
    }else{
        names.innerHTML=' ';
        demo=1;
    }

    if(secure.value != correctPassword){
        pass.innerHTML='invalid';
        pass.style.display = 'block';
        done=0;
    }else{
        pass.innerHTML=' ';
        done=1;
    }
    if(regx.test(mail.vlaue) || regx2.test(mail.value)){
        mailError.innerHTML = ' ';
        emailCode = 1 ;
    }else{
        mailError.innerHTML = 'invalid sytax' ;
        mailError.style.display = 'block';
        emailCode = 0 ;
    }
   
    if(demo && done && emailCode){
        return true;
    }else{
        return false ;
    }

}

let answers = document.getElementsByClassName('answers')[0];
let allAnswers = document.getElementsByClassName('allAnswers')[0];

answers.addEventListener('click',()=>{
    allAnswers.style.display = "block";
});
