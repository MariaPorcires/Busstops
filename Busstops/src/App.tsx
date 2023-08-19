import { useState } from 'react';
import './App.css'
import { Coords } from './interface';

type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>

function App() {

  const [position, setPosition] = useState<number>()

  function getPosition(setPosition: ReactSetState<Coords>) {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        const coords: GeolocationCoordinates = position.coords;

        setPosition({lat: coords.latitude, lon: coords.latitude})
        console.log(coords);
        
      })
    }
  }

  return (
    <>
     <button onClick={() => getPosition(setPosition)}>See location</button>
    <p>Your position is {position?.lat} {position?.lon}</p>
    </>
  )
}

export default App
