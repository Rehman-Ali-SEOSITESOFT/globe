import React, { useRef, useCallback } from 'react';
import Globe from 'react-globe.gl';
import MapImage from './image/abc.jpg';
import Image1 from './image/image1.png';
import Image2 from './image/image2.png';
import Image3 from './image/image3.png';
import Image4 from './image/image4.jpg';
import Image5 from './image/image5.png';
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
        globeTextureUrl={MapImage}
        backgroundColor="black"
        globeImageUrl={"https://tvfgreenedge.cloud/earth-night-green2.jpg"}
        // backgroundImageUrl="https://unpkg.com/three-globe@2.31.0/example/img/night-sky.png"
        labelsData={labelsData}
        labelText={"label"}
        labelSize={2.6}
        labelColor={useCallback(() => "#a3ffa2", [])}
        labelDotRadius={1}
        labelAltitude={0.05}
       
     />
    </div>
  );
};

export default GlobeWithLabels;