import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import EventLocator from './EventLocator'

function centerMoved(mapProps, map) {
  console.log("lat:", map.getCenter().lat())
  console.log("lng:", map.getCenter().lng())
}
const MapContainer = (props) => {

  return (
    <div>
      <Map google={props.google}
          initialCenter={{lat: 40.7128, lng: -74.0059}}
          zoom={14}
          onDragend={centerMoved}>

        <Marker onClick={props.onMarkerClick}
                name={'Current location'} />
      </Map>
      <EventLocator />
    </div>
  );

}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyA7UaZXsb4sfJVh-WkvY5sMMX8acA8Miw4')
})(MapContainer)
