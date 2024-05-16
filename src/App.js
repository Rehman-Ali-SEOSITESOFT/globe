import React, { useRef, useCallback } from 'react';
import Globe from 'react-globe.gl';
import Image1 from './image/earth-night-green.jpg';

const GlobeWithLabels = () => {
  const globeRef = useRef(null);

   // Data containing the labels
   const labelsData = [
    {
      lat: 40.7128,
      lng: -74.006,
      label: "Pakistan"
    }
    // { labelLabel: 'New York',labelLat: 40.7128, labelLng: -74.006, labelText: "Abc" },
    // { labelLabel: 'London', labelLat: 51.5074, labelLng: -0.1278, labelText: "abc" },
    // Add more labels as needed
  ];

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Globe
        ref={globeRef}
        backgroundColor="black"
        globeImageUrl={Image1}
        labelsData={labelsData}
        labelText={"label"}
        labelSize={2.6}
        labelColor={useCallback(() => "#a3ffa2", [])}
        labelDotRadius={1}
        labelAltitude={0.05}
        atmosphereColor="lightgreen" // Change this to the desired color for the ambient light
       
     />
    </div>
  );
};

export default GlobeWithLabels;