import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { geoFeatures } from "../../../mockGeoFeatures";

function MapComponent () {
    return (
        <div>
            <h2>Geographical Features</h2>
            <MapContainer center={[0, 0]} zoom={2} style={{ height: "400px", width: "100%" }}>
                <TileLayer  
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {geoFeatures.map((feature, index) => (
                        <GeoJSON key={index} data={feature} />
                    ))}
                    </MapContainer>
        </div>
    )
}


export default MapComponent;