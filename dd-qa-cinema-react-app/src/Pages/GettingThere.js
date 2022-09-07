import React from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import "./GettingThere.css";

const containerStyle = {
  width: '25%',
  height: '400px', 
  position: 'center',
  left: "37%",
  borderTopColor: 'white',
  borderBottomColor: 'white',
  borderWidth: "10%",
  backgroundColor: 'black',
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

  return (
    <>

      <div className = 'background'>
          <h1 className = 'text'>Where we are located</h1>
      <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={18}
                
                onLoad={onLoad}
                onUnmount={onUnmount}
                MarkerF position={center}
            >

                <MarkerF position={{ lat: 51.50755272669707, lng: -0.0737967374354214 }} />
              
      </GoogleMap>
      <h2 className ='text'>QA LONDON INTERNATIONAL HOUSE CENTRE</h2>
      <h2 className ='text2'> 1st Floor International House 1 St Katharines Way London E1W 1UN Tel: 0345 074 7829 Fax: 0345 074 7830</h2>
      <h3 className ='text'>Parking</h3>
      <p className ='text2'>We have parking, it is £2 for 6 hours and can be subsidised off your ticket. Please ask inside to one of staff members for more information.</p>
                    <h3 className ='text'>Tube/Train</h3><p className ='text2'>Fenchurch Street (5 minute walk), London Bridge (15 minute walk), Liverpool Street (15 minute walk)</p>
                    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Tower_Bridge_from_Shad_Thames.jpg/1200px-Tower_Bridge_from_Shad_Thames.jpg" alt =''/>
                    <h1 className ='text'>Places to go</h1><p>We are based in a fantastic area in London just near the Tower Bridge. Once you have visited us, there are multitude of areas that you can visit after.
                        There are places like the Tower Bridge, the Tower of London and the London eye.You are sure to be in for some fantastic views.</p>
                        <h2 className ='text'>Gym</h2>
                        <div id="cf4">
                          <img class="bottom" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Tower_Bridge_from_Shad_Thames.jpg/1200px-Tower_Bridge_from_Shad_Thames.jpg" alt="" />
                          <img class="top" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/c0/dc/f8/tower-of-london-white.jpg?w=1200&h=-1&s=1&cx=2515&cy=1577&chk=v1_1e1764bee68456e4c" alt="" />
                          </div>
                        <p className ='text2'>We are located in the same building as DnD's Gym and Bar. Here you can workout to keep in tip top shape or grab a beverage to re-energise yourself before heading out.</p>
                        <h2 className ='text'>Offers</h2>
                    <p className ='text2'>We currently have an offer on where you can use this voucher to get a free one week gym trail. Show them your ticket and quote "DnDBros" to receive this</p>
            </div>
    </>
  )
    
}

export default GettingThere;