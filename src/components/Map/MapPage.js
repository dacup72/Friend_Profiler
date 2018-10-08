import React, { Component } from 'react';
import './MapPage.css';
import GoogleMapReact from 'google-map-react';
import keys from '../../keys';
import Marker from "../Marker";

const MapPageThing = ({ text }) => <div>{text}</div>;


class MapPage extends Component {
  static defaultProps = {
    center: {
      lat: 39.742043,
      lng: -104.991531
    },
    zoom: 9
  };

  render() {
    console.log("==========  ", this.props)
    
    return (
      <div style={{ height: '80vh', width: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: keys.GOOGLE_MAPS_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={39.742043}
            lng={-104.991531}
            text={'Denver'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapPage;
