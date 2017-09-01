import React from 'react'

export default class EventLocator extends React.Component {
  state = {
    events: [],
    latlong: "-74.0059,40.7128"
  }

  componentWillMount(){
    fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=u8JQEBSuJJt4935YZiqWQMC6Uv6b0nYF&latlong=" + this.state.latlong)
      .then(res => res.json())
      .then(json => console.log("json", json,"address:", json._embedded.events[0]._embedded.venues[0].address.line1, "city:", json._embedded.events[0]._embedded.venues[0].city.name, "state:", json._embedded.events[0]._embedded.venues[0].state))
      // .then(json => this.saveEvents(json._embedded.events) )

      }


  //
  // saveEvents = (rawEventData) => {
  //   let eventList = []
  //   rawEventData.map((event, i) => {
  //     eventList[i] = {}
  //     eventList[i].name = event.name
  //
  //     let address = event._embedded.venues[0].address.line1
  //     let city = event._embedded.venues[0].city.name
  //     let state = event._embedded.venues[0].state.stateCode
  //
  //     eventList[i].address = `add`
  //
  //   } )
  // }
//.location.latitude
  render(){
    return null
  }
}

// events: [{
//     name: "",
//     location: {
//       address:
//       latlong:
//     }
// }],
