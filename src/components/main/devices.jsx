import React from 'react'
import { Fade, Zoom, cascade } from "react-awesome-reveal";

import main from '../../img/main-perspectiva.png';
import hub from '../../img/hub-perspectiva.png';
import splitter from '../../img/salidas-perspectiva.png';




export default function Devices() {
  return (
    <div>
        <Zoom cascade damping={1}>
            <h1>Nuestros productos</h1>
        </Zoom> 
    <div className='ourProducts'> 

        <div className='product'>
            <div className='prodImg'>
                <Fade direction='left'>
                    <img src={main} alt="main"/>
                </Fade>
            </div>
            <div className='description'>
                <Fade direction='right'>
                    <h2>Main</h2>
                    <p>Unidad principal de Growcast, la misma interactúa bajo una interfaz rs485, conector RJ45 y protocolo propio con los distintos sensores y módulos disponibles.</p>
                    <p>Esta placa cuenta con 3 salidas de control a 110/220v con un máximo de consumo de 10A totales.</p>
                    <p>Dicha placa se conecta a internet a internet vía WIFI o Ethernet para reportar los datos en tiempo real y recibir desde nuestra plataforma las distintas configuraciones para cada módulo de control disponible.</p>
                </Fade>
            </div>
            
        </div>
        <div className='product'>
            <div className='prodImg'>
                <Fade direction='left'>
                    <img src={hub} alt="main"/>
                </Fade>
            </div>
            <div className='description'>
                <Fade direction='right'>
                    <h2>Sensor THC (Temperatura, Humedad, C02)</h2>
                    <p>El sensor THC es un sensor que nos permite medir temperatura, humedad y co2.</p>
                    <p>te sensor esta basado en el Sensirion SCD41.</p>
                </Fade>
            </div>
            
        </div>
        <div className='product'>
            <div className='prodImg'>
                <Fade direction='left'>
                    <img src={splitter} alt="main"/>
                </Fade>
            </div>
            <div className='description'>
                <Fade direction='right'>
                    <h2>Splitter</h2>
                    <p>Es un módulo de expansión de puertosG pasivo el cual permite agregar hasta 3 sensores o módulos de expansión de salidas al controlador.</p>
                    <p>Se pueden conectar en cascada hasta 3 splitter.</p>
                </Fade>
            </div>
            
        </div>

    </div>

      
    </div>
  )
}
