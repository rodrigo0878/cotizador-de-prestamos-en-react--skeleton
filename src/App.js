import React, { Fragment, useState} from 'react';
import Header from './components/Headers';
import Formulario from './components/Formulario';
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';
import Spinner from './components/spinner';




//import Helpers from './Helpers'




function App() {

   //definir el state
   const [cantidad, guardarCantidad] = useState(0);
   const [plazo, guardarPlazo] = useState(''); // plazo es el valor y guardar plazo guarda la funcion que modficica el valor
   const [total, guardarTotal] = useState(0);

   const[cargando, guardarCargando] = useState(false);

    let componente;

  if(cargando){
    componente = <Spinner />
  }else if(total === 0){
    componente = <Mensaje />
   }else{
    

     

    
      componente =  <Resultado 

      total={total}
      plazo={plazo}
      cantidad={cantidad}

    /> ;
    

     

   }

   //pasamos los valores via prorps a formulario

  return (

    <Fragment>

        <Header
            titulo="Cotizador de Prestamos"
            
        />

        <div className='container'>
            <Formulario
                      cantidad={cantidad}
                      guardarCantidad={guardarCantidad}

                      plazo={plazo}
                      guardarPlazo= {guardarPlazo}

                      total = {total}
                      guardarTotal = {guardarTotal}


                      guardarCargando={guardarCargando}
            />



          

            

           


            <div className='mensajes' > 
                    {componente}
              </div>
            


            
              
        </div>
         

    </Fragment>
    
  );
}

export default App;
