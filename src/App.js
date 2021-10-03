import React from 'react';
import ReactGlobe from 'react-globe.gl';
import Globe from 'react-globe.gl';
import * as d3 from "d3";
import data from "./data";



const { useState, useEffect, useRef } = React;

function App() {
  const globeEl = useRef();
  const [popData, setPopData] = useState([]);
  const [locationData, setLocationData] = useState(data['loc'])

//   setInterval(myTimer, 1000);

//   function myTimer() {
//   let posUpdate = []
//   locationData.map(pos => {
//     pos.lat = pos.lat+(Math.random()*5)
//     pos.lng = pos.lng+(Math.random()*5)
//     posUpdate.push(pos)
//   });
//   setLocationData(posUpdate)
// }

  useEffect(() => {
      // Auto-rotate
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
  }, []);
  const weightColor = d3.scaleSequentialSqrt(d3.interpolateYlOrRd).domain([0, 1e7]);
      console.log("HEEEEEEE ", Math.random())

    return <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      // bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      backgroundColor="rgb(8,3,22)"
      // hexBinPointsData={data["loc"]}
      // hexBinPointWeight="pop"
      // hexAltitude={d => d.sumWeight * 6e-8}
      // hexBinResolution={4}
      // hexTopColor={d => weightColor(d.sumWeight)}
      // hexSideColor={d => weightColor(d.sumWeight)}
      // hexBinMerge={true}
      // enablePointerInteraction={false}
    
        hexBinPointsData={locationData}
        // hexBinPointWeight="size"
        hexAltitude={(d) => d.sumWeight * 0.5}
        hexBinResolution={3}
        hexTopColor={(d) =>"rgb(255,0,0)"}//{(d) => weightColor(d.sumWeight)}
        hexSideColor={(d) =>"rgba(0,0,0,0)"}//{(d) => weightColor(d.sumWeight)}
        // hexBinMerge={true}
        enablePointerInteraction={false}

    />;
  };

export default App;
