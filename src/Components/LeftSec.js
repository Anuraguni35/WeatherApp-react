import React from 'react';
import { useState, useEffect } from 'react';
import './LeftSec.css';
import SearchIcon from '@mui/icons-material/Search';
 

export default function LeftSec({
  cityDetails,
  setCityDetails,
  setLogo,
  logo,
}) {
  const [city, setCity] = useState('');

  const getCurrentWeather = async () => {
    try {
      let res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=4e7dc20832dd4650a48174931232605&q=${cityDetails.cityName}&aqi=no`,
        {
          method: 'get',
          headers: { 'Access-Control-Allow-Origin': '*' },
        }
      );
      let details = await res.json({});
      console.log(details);
      setCityDetails({
        ...cityDetails,
        cityName: details.location.name,
        Temp: details.current.temp_c + 'C',
        Visibility: details.current.vis_km,
        WindSpeed: details.current.wind_kph + 'KM/H',
        Humidity: details.current.humidity,
        wethertype: details.current.condition.text,
      });
      setLogo(details.current.condition.icon);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCurrentWeather();
     // eslint-disable-next-line
  }, [city]);
  return (
    <div className="LeftContainer">
      <div className="weatherLogo">
        <img className="logoImg" src={logo} alt={cityDetails.wethertype} />
      </div>
      <div className="weatherInfo">{cityDetails.wethertype}</div>
      <div className="SearchSec">
        <input
          value={city}
          type="text"
          className="SearchCity"
          placeholder="Search Cities"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setCityDetails({ ...cityDetails, cityName: city });
            setCity('');
          }}
          className="searchbtn"
        >
          <SearchIcon className="searchIcon" />
        </button>
      </div>
      <div className=" cityName">{cityDetails.cityName}</div>
      <div className="tableSec">
        <div className="tableContent">Temperature</div>
        <div className="tableContent">{cityDetails.Temp}</div>
      </div>
      <div className="BgRemove"> </div>
      <div className="tableSec">
        <div className="tableContent">Visibility</div>
        <div className="tableContent">{cityDetails.Visibility}</div>
      </div>
      <div className="BgRemove"> </div>
      <div className="tableSec">
        <div className="tableContent">Wind Speed</div>
        <div className="tableContent">{cityDetails.WindSpeed}</div>
      </div>
      <div className="BgRemove"> </div>
      <div className="tableSec">
        <div className="tableContent">Humidity</div>
        <div className="tableContent">{cityDetails.Humidity}</div>
      </div>
    </div>
  );
}
