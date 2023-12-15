import { ChangeEvent, FormEvent, SyntheticEvent, useEffect, useState } from "react";
import { SyntheticEventData } from "react-dom/test-utils";
interface WeatherData {
    coord: {
      lon: number;
      lat: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    base: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
      sea_level: number;
      grnd_level: number;
    };
    visibility: number;
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    rain?: {
      "1h": number;
    };
    clouds: {
      all: number;
    };
    dt: number;
    sys: {
      type: number;
      id: number;
      country: string;
      sunrise: number;
      sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
  };

export function Weather(){
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
   const [formValues, setFormValues] =  useState({
    city: '',
    country: 'RO',
   });



    //sincronizeaza 2 stateuri dif
    useEffect(() => {
        const {city,country} = formValues;
        fetch(
       `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=7f7daa99c9b43920c0137786f341ed59`
    ).then(res => res.json()).then(data => setWeatherData(data));
    },[formValues])

    function handleSearch(e: FormEvent<HTMLFormElement>){
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        setFormValues({city: formData.get('city') as string,
        country: formData.get('country') as string});


        // const formData = new FormData(e.target as HTMLFormElement);
        // formData.get('city');
        // formData.get('country');


    }
    // function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>){
    //     //console.log(e.target.value);
    //     setFormValues ({...formValues, [e.target.name]:e.target.value});        
    // }

    if (!weatherData){
        return <strong>Loading...</strong>
    }

        return(
        <>
        <h1>Weather</h1>
        <form onSubmit={handleSearch}>
            <p>
            <label htmlFor="city">City</label>
            {/* value={formValues.city} onChange={handleInputChange} */}
            <input type="text" name="city" id="city"  />
            </p>
            <p>
                <label htmlFor="country">Country</label>
                {/* value={formValues.country} onChange={handleInputChange} */}
                <select name="country" id="country" >
                    <option value="RO">Romania</option>
                    <option value="DE">Germany</option>
                    <option value="US"> USA</option>
                </select>
            </p>
            <p>
                <button type="submit">Search</button>
            </p>
        </form>
        The weather in {weatherData.name} is {weatherData.weather[0].description}.
        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description} />
        <p>Currently: {weatherData?.main.temp -273.15} &deg;C </p>
        <p>Minimum temp: {weatherData.main.temp_min}; Maximum temp: {weatherData.main.temp_max} ;</p>
        </>
    )
}