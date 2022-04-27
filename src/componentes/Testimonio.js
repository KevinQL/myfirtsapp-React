import React from 'react';
import '../stylesheets/Testimonio.css';


export function Testimonio(props) {
    
    props = props.brand;

    return ( 
      <div className = 'contenedor-testimonio' >
        <img className = 'imagen-testimonio'
          src = { require(`../imagenes/${props.imagen}.png`) }
          alt={`foto de ${props.detailimg}`}
        /> 
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
          <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
          <p className='texto-testimonio'>
            {`"${props.testimonio}`}
            <b>{` ${props.testimonioimportante} `}</b>
            {`${props.testimonio2}."`}
          </p>
        </div>
      </div>
    );
}

// export default Testimonio;
