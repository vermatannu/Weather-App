import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox"

export default function WeatherApp(){
    let[weatherInfo, setWeatherInfo] = useState({
        city: "Ranchi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}