import React from 'react';
import ReactGlobe from 'react-globe.gl';
import Globe from 'react-globe.gl';
import * as d3 from "d3";
import data from "./data";


const { useState, useEffect, useRef } = React;

function App() {
  const globeEl = useRef();
  const [popData, setPopData] = useState([]);
  useEffect(() => {
      // Auto-rotate
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
  }, []);
  const weightColor = d3.scaleSequentialSqrt(d3.interpolateYlOrRd).domain([0, 1e7]);
      console.log("HEREEEEEEEEEEEEEEEEEEEEEEEEE ", weightColor(0))
    return <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      // bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      // backgroundColor="rgba(0,0,255,0.5)"
      // hexBinPointsData={data["loc"]}
      // hexBinPointWeight="pop"
      // hexAltitude={d => d.sumWeight * 6e-8}
      // hexBinResolution={4}
      // hexTopColor={d => weightColor(d.sumWeight)}
      // hexSideColor={d => weightColor(d.sumWeight)}
      // hexBinMerge={true}
      // enablePointerInteraction={false}
      // pointLat={9.081999}
      // pointLng={8.675277000000001}
      // pointColor="rgb(255,0,0)"
      // // pointRadius={4000}
      // // pointAltitude={500000}
      // pointLabel="TTTTTTTTTTTTTT"
      // pointsData={{pointLat: 9.081999, pointLng: 8.675277000000001}}
    
        hexBinPointsData={data["loc"]}
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
