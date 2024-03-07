'use client'
import Image from "next/image";
import React, { ChangeEvent, useEffect, useState } from "react";


function componentToHex(c:number) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

export default function Home() {

  const toRGB = (color:string) => {
    const { style } = new Option();
    style.color = color;
    return style.color;
}
  const [hexColor, setHexColor] = useState('A4654F');
  const [rgbColor, setRgbColor] = useState(String)
  const [redColorRange, setRedColorRange] = useState('100')
  const [greenColorRange, setGreenColorRange] = useState('100')
  const [blackColorRange, setBlackColorRange] = useState('100')

  useEffect(()=>{
    const rgbc = toRGB('#'+hexColor || '');
    setRgbColor(rgbc)
  },[hexColor])

  useEffect(()=>{
    // const rgbTohex = [parseInt(redColorRange,16), parseInt(greenColorRange,16), parseInt(blackColorRange,16)].map(()=>)
    const r = parseInt(redColorRange)
    const g = parseInt(greenColorRange)
    const b = parseInt(blackColorRange)
    setHexColor(componentToHex(r)+componentToHex(g)+componentToHex(b))
  }, [redColorRange, greenColorRange, blackColorRange])
  
  return (
    <main className={`flex min-h-screen`} style={{background:'#'+hexColor}}>
      <div className="z-10 min-w-[30%] min-h-screen bg-white flex-col justify-center p-5">
        <canvas className="w-full bg-lime-700"></canvas>
        <div className="slidecontainer">
          {/* Red color code */}
          <label htmlFor="color-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Red</label>
          <input id="color-range" type="range"  min="1" onChange={(e)=>setRedColorRange(e.target.value)} max="255" value={redColorRange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
          {/* Green color code */}
          <label htmlFor="color-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Green</label>
          <input id="color-range" type="range"  min="0" onChange={(e)=>setGreenColorRange(e.target.value)} max="255" value={greenColorRange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
          {/* Black color code */}
          <label htmlFor="color-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Black</label>
          <input id="color-range" type="range"  min="0" onChange={(e)=>setBlackColorRange(e.target.value)} max="255" value={blackColorRange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>

        </div>
        <div className="color-codes-group p-2">
          <div className="hex-input-group relative">
            <label htmlFor="input-hex" className="block select-none">HEX</label>
            <input type="text" 
                  maxLength={6} 
                  id="input-hex" 
                  defaultValue={hexColor} 
                  onChange={(e)=> setHexColor(e.target.value)} 
                  className="pl-8 border-[1px] border-solid border-[#dddeee] focus:outline-none focus:border-solid focus:border-[#dddeee]"/>
            <div className="hex-icon bg-slate-200 absolute top-1/2 left-1 px-2">#</div>
          </div>
          <div className="rgb-input-group relative">
            <label htmlFor="input-rgb" className="block select-none">RGB</label>
            <input type="text" 
                  readOnly={true}
                  maxLength={6} 
                  id="input-rgb" 
                  value={`${rgbColor}`}
                  onChange={(e)=>e}
                  className="p-2 border-[1px] border-solid border-[#dddeee] focus:outline-none" />
          </div>
        </div>
        <h1>this is main winodw</h1>
      </div>
    </main>
  );
}



