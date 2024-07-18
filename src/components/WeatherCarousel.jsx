import axios from "axios";
import { useEffect, useState } from "react";

export const WeatherCarousel = ({numDays, zipCode}) => {

  const baseUrl = 'http://api.weatherapi.com/v1';
  const forecast = '/forecast.json';
  const apiKey = '1b57f4ce4c4d4c1a8d4152622241407';

  const [forecastData, setForecastData] = useState(null);

  const getWeatherData = () => {
    console.log(`zipcode: ${zipCode}`);
    axios.get(baseUrl + forecast, {
      params: {
        key: apiKey,
        q: !(typeof zipCode != "string") && !isNaN(zipCode) && !isNaN(parseFloat(zipCode)) && zipCode.length === 5 ? parseFloat(zipCode) : 10305,
        days: numDays,
      }
    })
      .then(function (response) {
        console.log(response);
        console.log(numDays);
        console.log(response.data);
        setForecastData(response.data);

      })
      .catch(function (error) {
        console.log(error);
      })
  }

  useEffect(getWeatherData, [numDays]);

  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {forecastData != null ?
          <>
            {forecastData.forecast.forecastday.map((oneDayForecast, index) => 
              <div className={index === 0 ? 'carousel-item active' : 'carousel-item'} key={index}>
                <img src="https://png.pngtree.com/element_our/20190529/ourmid/pngtree-weather-forecast-image_1197280.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h1>Day {index + 1}</h1>
                  <h2>Location: {forecastData.location.name}, {forecastData.location.region} in {forecastData.location.country}</h2>
                  <h5>Date: {oneDayForecast.date}</h5>
                  <p>Max Temp F: {oneDayForecast.day.maxtemp_f}</p>
                  <p>Min Temp F: {oneDayForecast.day.mintemp_f}</p>
                </div>
              </div>
            )}
          </>
            : ''}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}
