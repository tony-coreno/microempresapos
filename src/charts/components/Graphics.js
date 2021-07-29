import React, { useContext } from 'react';
import {Line} from 'react-chartjs-2';
import { ContextEstado } from '../../context/ContextEstado';
import '../assets/css/Graphics.css';

function Graphics() {
    const {acumulado} = useContext(ContextEstado)
    const data={
        labels:["Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
        datasets:[
            {
            label:"Total de ventas por Mes",
            fill: false,
            backgroundColor: 'rgba(73,155,234,1)',
            borderColor:'rgba(73,155,234,1)',
            pointBorderColor:'rgba(73,155,234,1)',
            pointBorderWidth:3,
            pointHoverRadius:5,
            pointHoverBackgroundColor:'rgba(73,155,234,1)',
            pointHoverBorderColor:'rgba(73,155,234,1)',
            pointRadius: 1,
            pointHitRadius: 10,
            data: [2450, 2075, 2169, 2575, 2150, `${acumulado}`]
            }
        ]
    }
    return (
        <div className="containerGrafica">
            <Line data={data}/>
        </div>
    );
}

export default Graphics;