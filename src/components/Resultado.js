import React from 'react';


const Resultado = (props) => {

     const { total, plazo, cantidad} = props;
    return ( 
        <div className='u-fullwidth resultado'>
                <h2>RESUMEN</h2>

                <p> La cantidad solicitada es : ${cantidad}</p>
                <p> El Plazo solicitado es : {plazo} Meses</p>
                <p> Su Pago Mensual es de : {(total / plazo).toFixed(2)}</p>
                <p>Total a Pagar del Prestamos es: { total }</p>
        </div>   
    );
}
 
export default Resultado;