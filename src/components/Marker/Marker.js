import React from 'react';
import "./Marker.css";

const Marker = ({ text }) => {
  return (
    <div className="marker">
      {text}
    </div>
  )
}

export default Marker;