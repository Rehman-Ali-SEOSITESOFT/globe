import React, { useRef, useCallback } from 'react';
import Globe from 'react-globe.gl';
import Image1 from './image/earth-night-green.jpg';

const GlobeWithLabels = () => {
  const globeRef = useRef(null);

   // Data containing the labels
   const labelsData = [

    { lat: 40.7128, lng: -74.006, label: "USA (New York)" },
    { lat: 51.5074, lng: -0.1278, label: "UK (London)" },
    { lat: 35.6895, lng: 139.6917, label: "Japan (Tokyo)" },
    { lat: 48.8566, lng: 2.3522, label: "France (Paris)" },
    { lat: 55.7558, lng: 37.6173, label: "Russia (Moscow)" },
    { lat: -33.8688, lng: 151.2093, label: "Australia (Sydney)" },
    { lat: 28.6139, lng: 77.209, label: "India (Delhi)" },
    { lat: -23.5505, lng: -46.6333, label: "Brazil (São Paulo)" },
    { lat: 31.2304, lng: 121.4737, label: "China (Shanghai)" },
    { lat: 6.5244, lng: 3.3792, label: "Nigeria (Lagos)" },
    { lat: 19.4326, lng: -99.1332, label: "Mexico (Mexico City)" },
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
