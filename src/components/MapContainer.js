import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import EventDetails from './EventDetails'

// function centerMoved(mapProps, map) {
//   console.log("lat:", map.getCenter().lat())
//   console.log("lng:", map.getCenter().lng())
// }

export class MapContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: "",
      lng: ""
    }
    this.centerMoved = this.centerMoved.bind(this)
    this.markerClick = this.markerClick.bind(this)

  }

  markerClick() {
    debugger
  }

  centerMoved(mapProps, map) {
    // console.log(map.getCenter())
    this.setState({
      lat: map.getCenter().lat(),
      lng: map.getCenter().lng(),
      events: ""
    })
    this.fetch()
  }

  fetch() {
    fetch("http://api.eventful.com/json/events/search?app_key=5gHvDNGCBTF8rNtF&where=" + this.state.lat + "," + this.state.lng + "&within=5&t=This+Weekend")
      .then(res => res.json()).then(json => {
        let eventList = []
        json.events.event.map((event, i) => {
          eventList[i] = {
            event: {title: event.title, venueName: event.venue_name, time: event.start_time, city: event.city_name, lat: event.latitude, lng: event.longitude, showDetails: false}
          }
        })
        this.setState({
          events: eventList
        })
      })

  }


  render() {
    if (this.state.events !== undefined && this.state.events !== "") {
      return (
        <div id="map">
          <center><EventDetails eventInfo={this.state.events}/></center>
          <Map key={this.props} google={this.props.google}
              initialCenter={{lat: 40.7128, lng: -74.0059}}
              zoom={12}
              onDragend={this.centerMoved}>
                {this.state.events.map(function(event, i){
                  return <Marker title={event.event.title} position={{lat: event.event.lat, lng: event.event.lng}} />
                })}
          </Map>
        </div>
      );
    } else {
      return (
        <div id="map">
          <Map key={this.props} google={this.props.google}
              initialCenter={{lat: 40.7128, lng: -74.0059}}
              zoom={12}
              onDragend={this.centerMoved}>
          </Map>
          {/* <PopUpDetails /> */}
        </div>
      );
    }
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyA7UaZXsb4sfJVh-WkvY5sMMX8acA8Miw4')
})(MapContainer)
