let inputCity = document.querySelectorAll('.input_city');
let search = document.querySelectorAll('.search');
let cityName = document.querySelectorAll('.city_name');
let temp = document.querySelectorAll('.temp');
let desription = document.querySelectorAll('.desp');

let apiKey = '1f2f34c6a9d99d1499402027238a58f6';

search[0].addEventListener('click',()=>{
    let city = inputCity[0].value ;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then((Response) => Response.json())
    .then((data) => {
        console.log(data);
        cityName[0].innerHTML = data['name'];
        temp[0].innerHTML = data['main']['temp'];
        desription[0].innerHTML = data['weather'][0]['description'];
    })
    .catch(err =>{
        alert('wrong city name')
        inputCity[0].value = '';
        cityName[0].innerHTML ='';
        temp[0].innerHTML = '';
        desription[0].innerHTML = '';
    })
})

