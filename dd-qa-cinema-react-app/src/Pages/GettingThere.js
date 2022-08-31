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

  const [setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);
//     setMap(map)
//   }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <><GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
          //onLoad={onLoad}
          onUnmount={onUnmount}
          MarkerF position={center}

      >
          <MarkerF position={{ lat: 51.5076, lng: -0.0737 }} />
          <></>
      </GoogleMap><h1>Hola</h1></>
  ) : <></>
}

export default React.memo(GettingThere)