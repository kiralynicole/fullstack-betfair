//face get la server by default
//fetch results in success
(function(){

    function getWeatherData(city = 'Brasov',country='RO'){
const promise = fetch('https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=5f21b80b81096bf0ac30a3684bc79561');
const promise2 = promise.then((res) => res.json(), console.warn).then(handleResponse);
    }
  //  getWeatherData();

    function getWeatherByLocation(lat,lon){
        const promise = fetch('https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5f21b80b81096bf0ac30a3684bc79561');
        const promise2 = promise.then((res) => res.json(), console.warn).then(handleResponse);
    }

    navigator.geolocation.getCurrentPosition(
       // (...args)=>console.log(args),
       (position)=>{
        const{latitude,longitude} = position.coords;
        getWeatherByLocation(latitude,longitude);
       },
        ()=>{
            getWeatherData();
        }
    );


function handleResponse(res){
   const elems = document.querySelectorAll('[data-weather]');
   const text = document.createElement('span');
   const icon = document.querySelector('[data-weather-icon');
   const cityOutput = document.querySelector('[data-weather-city]');
   const descOutput = document.querySelector('[data-weather-desc]');

   cityOutput.textContent = data.name;
   descOutput.textContent = data.weather[0].description

   text.innerHTML('&deg;C');
   icon.src = `https://api.openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
   icon.alt = data.weather[0].description;
   for (const elem of elems)
   {
    const value = elem.dataset.weather;
    elem.textContent =  kelvinToCelsius(data.main[value]);
    elem.append(text.cloneNode(true));
   }
}

function kelvinToCelsius(degK){
    return (degK - 273.15).toFixed(1);
}
document
.querySelector('[data-weather-form]')
.addEventListener('submit',handleWeatherformSubmit);

})();

function handleWeatherformSubmit(e){
    //blocam submitul implicit
    e.preventDefault();

    const data = new FormData(e.target);

    getWeatherData(data.get('city'), data.get('country'));
}

// console.log(res); //Promise
// const o = {
//     pro1:'Test',
//     prop2:42
// }


//diferente promisiuni callbackuri
//promisiunea are si o stare, posibilitatea sa atasam callbackuri(mai multe)  


// console.log(o);
// setTimeout(()=>(o.prop2 = 'Paul'),100);