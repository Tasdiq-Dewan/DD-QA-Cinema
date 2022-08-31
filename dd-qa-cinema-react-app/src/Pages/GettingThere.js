import React from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '50%',
  height: '400px'
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

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        //onLoad={onLoad}
        onUnmount={onUnmount}
        MarkerF position={center}
        
      >
        <MarkerF position={{ lat: 51.5076, lng: -0.0737 }} />}
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(GettingThere)