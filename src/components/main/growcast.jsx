import React from 'react'
import { Fade, Zoom, cascade } from "react-awesome-reveal";

export default function Growcast() {
  return (
    <div>
        <div className='aboutUs'>
        <Zoom cascade damping={1}>
            <h1>Nosotros</h1>
        </Zoom>  

        <div>
            <Fade cascade damping={0.9}>
                <h3>Misión</h3>
            </Fade>
            <Fade cascade damping={0.9}>
                <p>
                En Growcast, somos un equipo apasionado que comparte un compromiso inquebrantable con la calidad y la estandarización de procesos. Creemos que la clave para lograr resultados consistentes y en constante evolución radica en la implementación de enfoques profesionales en la agricultura de precision.
                </p>
            </Fade>
        </div>

        <div>
            <Fade cascade damping={0.9}>
                <h3>Origen</h3>
            </Fade>
            <Fade cascade damping={0.9}>
                <p>
                Growcast se originó en el seno de nuestra asociación civil, CEIS, donde iniciamos nuestra inmersión en el mundo de los cultivadores y entendimos sus desafíos. Desde su inicio, el objetivo principal de Growcast ha sido proporcionar a nuestros usuarios información valiosa y un entorno de control profesional. Queremos permitirles desarrollar sus habilidades sin preocuparse por las variables ambientales.
                </p>
            </Fade>
        </div>

        <div>
            <Fade cascade damping={0.9}>
                <h3>Nuestra Distinción</h3>
            </Fade>
            <Fade cascade damping={0.9}>
                <p>
                ¿Qué nos diferencia de las demás marcas? En Growcast, nuestra principal distinción radica en la escalabilidad de nuestros productos. Ofrecemos a cultivadores principiantes acceso a herramientas profesionales a un costo accesible. Además, proporcionamos la flexibilidad de agregar sensores y dispositivos según sus necesidades. Para cultivos industriales, ofrecemos tableros de control de gran envergadura.
                </p>
            </Fade>
        </div>
        
        <div>
            <Fade cascade damping={0.9}>
                <h3>La Experiencia de Growcast</h3>
            </Fade>
            <Fade cascade damping={0.9}>
                <p>
                Nuestra meta es que cada usuario de Growcast experimente una sensación de tranquilidad inigualable. Con nuestra tecnología, pueden acceder al estado de su cultivo en cualquier momento y confiar en que sus plantas están en buenas manos. Queremos que se sientan seguros y respaldados en su búsqueda de la excelencia agrícola.
                </p>
            </Fade>
        </div>
        
        
        </div>

    </div>
  )
}