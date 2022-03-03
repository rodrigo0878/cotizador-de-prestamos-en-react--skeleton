import React, { useState, Fragment } from 'react';
import { calcularTotal } from '../Helpers';



const Formulario = (props) => {

const {cantidad, guardarCantidad, plazo, guardarPlazo,  guardarTotal, guardarCargando} = props;



    //definir un state para el error
    const [error, guardarError] = useState(false)

   



    const  leerCantidad = (e) => {
        //console.log('Escribirndo cantidad......')
        //console.log(e.target.value)

        guardarCantidad(parseInt(e.target.value))
    }
     

    /*const leerPlazo = (e) => {
        guardarPlazo(parseInt(e.target.value))
    }*/


    //cuando el usuario hace submit
    const  calcularPrestamos = e => {
        e.preventDefault();
        //console.log('Calculando  cantidad......');
        //console.log(e.target.value)


        //validar
        if( cantidad === 0 || plazo === ''){
            guardarError(true)
            console.log('hay un  error')
            return
            
            
        }


        //eliminar error previo
        guardarError(false)
        //console.log('pasamos la validacion')

        //habilitamos el spinner

        guardarCargando(true)


        //ponemos el spinner
        setTimeout(() => {

            guardarCargando(false);

                //hacemos la cotizacion     
        const total = calcularTotal(cantidad, plazo);

        //una ves calculado guardar total
         guardarTotal(total);

                   
        }, 4000);


       

        //console.log(total)

        
    }
    





    return (  

        <Fragment>
        <form onSubmit={calcularPrestamos}>
           
          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000" 
                      onChange = {leerCantidad}
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select 
                      className="u-full-width"
                      onChange={e => guardarPlazo(e.target.value)}
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
  </form>


            {(error) ? <p className="error">Todos Los Campos Son Obligatorios</p>: null}

           
  

  </Fragment>
    );
}
 
export default Formulario;