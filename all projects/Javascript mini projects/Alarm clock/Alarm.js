//running clock part
let time = document.getElementsByClassName("time");
let hour = time[0];
let minute = time[1];
let sec = time[2];
let amPM = document.getElementsByClassName("amPM")[0];

const runningClock = () => {
    
    let hrTime = new Date().getHours(); 
    let minTime = new Date().getMinutes();
    let secTime = new Date().getSeconds();
    hour.innerHTML = hrTime;
    minute.innerHTML = minTime ;
    sec.innerHTML = secTime;

   if (hrTime > 12){
    amPM.innerHTML = 'PM';
   }

   switch(hrTime){
    case 13 : hour.innerHTML = 1 ;
    break;
    case 14 : hour.innerHTML = 2 ;
    break;
    case 15 : hour.innerHTML = 3 ;
    break;
    case 16 : hour.innerHTML = 4 ;
    break;
    case 17 : hour.innerHTML = 5 ;
    break;
    case 18 : hour.innerHTML = 6 ;
    break;
    case 19 : hour.innerHTML = 7 ;
    break;
    case 20 : hour.innerHTML = 8 ;
    break;
    case 21 : hour.innerHTML = 9 ;
    break;
    case 22 : hour.innerHTML = 10 ;
    break;
    case 23 : hour.innerHTML = 11;
    break;
    case 24 : hour.innerHTML = 12;
    break;
    default : "nothing to display;"
    
   }


}
setInterval(runningClock,1000);

//select time part

let mySelect = document.getElementsByClassName('mySelect');//

const add_options_hours = () => {
    for(i=1 ; i<=12 ; i++){
        mySelect[0].add(new Option(i));
    }
    for(let i=0 ; i<=60 ; i++){
        mySelect[1].add(new Option(i));
    }
        
}

add_options_hours();

//button click -  set and stop alarm part

let buttonSetAlarm = document.getElementsByClassName('button-set-alarm')[0];
let image = document.getElementsByClassName('image')[0];
let audioStatus = document.getElementsByClassName('audioStatus')[0];

const SetAlarm = () => {
    let currentHour = hour.innerHTML ;
    let currentMin = minute.innerHTML ;
    let currentAmPM = amPM.innerHTML ;

    let selectedHour = mySelect[0].value ;
    let selectedMin = mySelect[1].value ;
    let selectedAmPm = mySelect[2].value ;

    if(currentHour == selectedHour && currentMin == selectedMin  && currentAmPM == selectedAmPm  ){
            console.log('alarm ringing');
            image.src = "pictures/alarm-clock.gif";
            audioStatus.play();
    }else{
        console.log('stop');
        setTimeout(SetAlarm,10000);
    }
        
    buttonSetAlarm.innerHTML = 'Stop Alarm';
}

const stopAlarm = () => {
    console.log('stop');
    image.src = "pictures/alarm-clock1.gif";
    audioStatus.pause();
    buttonSetAlarm.innerHTML = 'Set Alarm';
    
}

buttonSetAlarm.addEventListener('click',() => {
    if(buttonSetAlarm.innerHTML == 'Set Alarm'){
        SetAlarm();
    }else if(buttonSetAlarm.innerHTML == 'Stop Alarm'){
        stopAlarm();   
    }
})

