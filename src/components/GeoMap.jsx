import React from 'react';
import { geoFeatures } from '../data/mockGeoFeatures';


function GeoMap() {

    const features = geoFeatures.features;

  return (
    <div>
        <h2>Restaurant Regions</h2>
        <h4>Orders coming in from</h4>
        <ul>
            {features.map((feature, index) => (
            <li key={index}>
                {feature.properties.name}
                Coordinates: {JSON.stringify(feature.coordinates)}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default GeoMap;