import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export default class EventDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (<div>
      Event List:
      <ul>
        {this.props.eventInfo.map(function(event, i){
          return <li>{event.event.title} - {event.event.time} @ {event.event.venueName} in {event.event.city} </li>
        })}
      </ul>
    </div>)
  }


}
