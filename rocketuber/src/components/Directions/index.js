import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => 
    <MapViewDirections 
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyCbkCYU1_wSaaBaP94TWkH84PHfdZDLLnQ"
        strokeWidth={3}
        strokeColor="#222"
    />;

export default Directions;
