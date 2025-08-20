import React, { useRef, useCallback } from 'react';
import Globe from 'react-globe.gl';
import Image1 from './image/earth-night-green.jpg';

const GlobeWithLabels = () => {
  const globeRef = useRef(null);

   // Data containing the labels
const labelsData = [
  { lat: 30.2672, lng: -97.7431, label: "Austin, Texas, USA" },
  { lat: 8.9824, lng: -79.5199, label: "Panama City, Panama" },
  { lat: -12.0464, lng: -77.0428, label: "Lima, Peru" },
  { lat: 17.1274, lng: -61.8468, label: "St. John's, Antigua and Barbuda" },
  { lat: -27.5949, lng: -48.5482, label: "Florianópolis, Brazil" },
  { lat: -34.6037, lng: -58.3816, label: "Buenos Aires, Argentina" },
  { lat: 51.5074, lng: -0.1278, label: "London, United Kingdom" },
  { lat: 47.3769, lng: 8.5417, label: "Zurich, Switzerland" },
  { lat: 41.2995, lng: 69.2401, label: "Tashkent, Uzbekistan" },
  { lat: -20.1609, lng: 57.5012, label: "Port Louis, Mauritius" },
  { lat: 14.7167, lng: -17.4677, label: "Dakar, Senegal" },
  { lat: 0.4162, lng: 9.4673, label: "Libreville, Gabon" },
  { lat: -24.6282, lng: 25.9231, label: "Gaborone, Botswana" },
  { lat: 24.4539, lng: 54.3773, label: "Abu Dhabi, UAE" },
  { lat: 12.2958, lng: 76.6394, label: "Mysore, India" },
  { lat: 22.3193, lng: 114.1694, label: "Hong Kong" },
];



  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Globe
        ref={globeRef}
        backgroundColor="black"
        globeImageUrl={Image1}
        labelsData={labelsData}
        labelText={"label"}
        labelSize={1}
        labelColor={useCallback(() => "#a3ffa2", [])}
        labelDotRadius={1}
        labelAltitude={0.05}
        atmosphereColor="lightgreen" // Change this to the desired color for the ambient light
       animateIn={true}
     />
    </div>
  );
};

export default GlobeWithLabels;
