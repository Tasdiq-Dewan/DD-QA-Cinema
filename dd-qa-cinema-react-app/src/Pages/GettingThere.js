import React from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '25%',
  height: '400px', 
};

const center = {
  lat: 51.5076,
  lng: -0.0737
  
};

function GettingThere() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBUodBtyw5yAUwjFxQLsaMaxYa_tIqAg-U"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) { //loads the map when page loads if this isn't here it will just be a loading page
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <><GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
          onLoad={onLoad}
          onUnmount={onUnmount}
          MarkerF position={center}

      >
          <MarkerF position={{ lat: 51.50755272669707, lng: -0.0737967374354214 }} />
          <></>
      </GoogleMap><h1>Where we are located</h1><p>We are based right next to the Tower Bridge allowing you multiple options to travel to us. </p>
      <p>You can travel via the underground, public transport as well as driving in. Once you have visited us, you can visit multiple tourist sites like the Tower Bridge, London Eye and Tower of London. </p>
      <h2>QA LONDON INTERNATIONAL HOUSE CENTRE</h2><h2> 1st Floor International House 1 St Katharines Way London E1W 1UN Tel: 0345 074 7829 Fax: 0345 074 7830</h2><h3>Parking</h3><p>There's no onsite parking, however people can park at Minories Car Park</p>
      <h3>Tube/Train</h3><p>Fenchurch Street (5 minute walk), London Bridge (15 minute walk), Liverpool Street (15 minute walk)</p></>
  ) : <></>
}

export default React.memo(GettingThere)