import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
import keys from '../../keys';
import Marker from "../../components/Marker";

const MapView = ({ location: { state: { data, data: { latitude, longitude, name } } } }) => (
  <Fragment>
    <Link to="/"><button>Close Map</button></Link>
    <Link to={{ pathname: "/details", state: { data } }}>
      <button>View Details</button>
    </Link>
    <div style={{ height: '80vh', width: '80%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: keys.GOOGLE_MAPS_KEY }}
        defaultCenter={{ lat: latitude, lng: longitude }}
        defaultZoom={9}
      >
        <Marker
          lat={latitude}
          lng={longitude}
          text={name}
        />
      </GoogleMapReact>
    </div>
  </Fragment>
);

export default MapView;
