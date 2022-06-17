import React from "react";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import { useState } from "react";

function Calculos({ dataInput, datosFisicos }) {
    

    var bew = [datosFisicos.peso, datosFisicos.cg, datosFisicos.momento];

    var fpax = [Number(dataInput.p1) + Number(dataInput.p2), datosFisicos.fpax, datosFisicos.fpax*(Number(dataInput.p1) + Number(dataInput.p2))];
    var rpax1 = [Number(dataInput.rpax1), datosFisicos.rpax1, datosFisicos.rpax1*Number(dataInput.rpax1)];
    var rpax2 = [Number(dataInput.rpax2), datosFisicos.rpax2, datosFisicos.rpax2*Number(dataInput.rpax2)];
    var bag1 = [Number(dataInput.bag1), datosFisicos.bag1, datosFisicos.bag1*Number(dataInput.bag1)];
    var bag2 = [Number(dataInput.bag2), datosFisicos.bag2, datosFisicos.bag2*Number(dataInput.bag2)];
    var bag3 = [Number(dataInput.bag3), datosFisicos.bag3, datosFisicos.bag3*Number(dataInput.bag3)];
    var bag4 = [Number(dataInput.bag4), datosFisicos.bag4, datosFisicos.bag4*Number(dataInput.bag4)];
    var fob = [Number(dataInput.fob)*6, datosFisicos.fob, Number(dataInput.fob)*datosFisicos.fob*6];
    var oilna = [Number(dataInput.oilna), datosFisicos.oilna, datosFisicos.oilna*Number(dataInput.oilna)];
    
    var zfww = fpax[0] + rpax1[0] + bag1[0];
    var zfwm = fpax[2] + rpax1[2] + bag1[2];
    var zfw = [bew[0]+zfww, bew[1]+(1000*zfwm/zfww), bew[2]+zfwm];
    
    var rw = [zfw[0] + fob[0], 1000*(zfw[2] + fob[2])/(zfw[0] + fob[0]) , zfw[2] + fob[2]]
    var tow = [rw[0] - 6.6, 1000*(rw[2] - (6.6*48/1000))/(rw[0] - 6.6) , rw[2] - (6.6*48/1000)];
    var tf = [Number(dataInput.tf)*6, datosFisicos.fob, datosFisicos.fob*Number(dataInput.tf)*6];
    var lw = [tow[0] - tf[0], 1000*(tow[2] - tf[2])/(tow[0] - tf[0]) , tow[2] - tf[2]];
    // console.log( typeof zfw[0])

    const ldata = [
        {
          id: 1,
          x: 35.45,
          y: 1500,
        },
        {
          id: 2,
          x: 35.45,
          y: 1940,
        },
        {
          id: 3,
          x: 38.5,
          y: 2300
        },
        {
          id: 4,
          x: 47.65,
          y: 2300
        },
        {
          id: 5,
          x: 47.65,
          y: 1500
        },
      ];
      
      
      const [lineData, setlineData] = useState({
        labels: ldata.map((value) => value.x),
        datasets: [
            {
                label: "Mass & Balance",
                data: ldata.map((value) => value.y),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                  ],
                  borderColor: "blue",
                  borderWidth: 2
            },
        ]
      });

    return (
        <div>
            {/* <p>FPAX: {fpax}</p> */}
            {/* <p>RPAX1: {rpax1}</p> */}
            {/* <p>BAG1: {bag1}</p> */}
            {/* <p>FOB: {fob}</p> */}
            {/* <p>ZFW: {zfw}</p> */}
            {/* <Line data={lineData} /> */}
        </div>
    );
    
};

export default Calculos;