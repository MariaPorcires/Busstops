import { useState } from 'react';
import './App.css'
import { Coords, Data, StopLocation, Stop } from './interface';

type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>

function App() {

  const [position, setPosition] = useState<Coords | null>(null)
  const [station, setStation] = useState<Data | null>(null)

  function getPosition(setPosition: ReactSetState<Coords | null>) { 
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {

        const coords: GeolocationCoordinates = position.coords;

        setPosition({lat: coords.latitude, lon: coords.latitude})
        console.log(coords);
        
      })
    }
  }

  const API_KEY: string ='b4c630ea-b9b0-4bf9-967f-60537212e062';

  async function reverseGeoCode(lat:number, lon: number, setStation) {
    const url = `https://api.resrobot.se/v2.1/location.nearbystops?originCoordLat=${lat}&originCoordLong=${lon}&format=json&accessId=${API_KEY}`
    const response = await fetch(url);
    const data: Data = await response.json()
    console.log(data.stopLocationOrCoordLocation);
     setStation(data)
  }

  return (
    <section>
     <button onClick={() => getPosition(setPosition)}>See location</button>
     <p>Your position is {position?.lat} {position?.lon}</p>
     <button onClick={() => reverseGeoCode(position.lat, position.lon, setStation)}>Stops</button>
    </section>
  )
}

export default App
