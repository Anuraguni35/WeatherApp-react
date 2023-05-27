import React from 'react';
import { useState } from 'react';
import './DashBoard.css';
import LeftSec from './LeftSec.js';
import RightSec from './RightSec.js';
export default function DashBoard() {
  const [cityDetails, setCityDetails] = useState({
    cityName: 'Delhi',
    Temp: '55 C',
    Visibility: 'sss',
    WindSpeed: 'fdads',
    Humidity: 'sdas',
    wethertype: 'Haze',
  });
  const [logo, setLogo] = useState('');
  return (
    <div className="DashBoard">
      <LeftSec
        cityDetails={cityDetails}
        setCityDetails={setCityDetails}
        setLogo={setLogo}
        logo={logo}
      />
      <div className="Logo">Search City to get the weather Info</div>
    </div>
  );
}
