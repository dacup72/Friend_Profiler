import React, { Fragment } from 'react';
import './MapPage.css';
import GoogleMapReact from 'google-map-react';
import keys from '../../keys';
import Marker from "../Marker";

const MapPage = props => {
  return (
    <Fragment>
    <button onClick={props.handleCloseMap}>Close Map</button>
    <div style={{ height: '80vh', width: '80%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: keys.GOOGLE_MAPS_KEY }}
        defaultCenter={props.coords}
        defaultZoom={9}
      >
        <Marker
          lat={props.coords.lat}
          lng={props.coords.lng}
          text={props.name}
        />
      </GoogleMapReact>
    </div>
    </Fragment>
  );
}

export default MapPage;
