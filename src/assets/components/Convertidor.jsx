//@ts-check4
import React from 'react'
import "../hojas-de-estilos/Convertidor.css"
import { useState,useEffect } from 'react'
import FetchApi from '../../helper/FetchApi'


export const Convertidor = () => {
    
  

   //respuesta que llega del servidor de dolarDoday 
   let respuestaApi = FetchApi() 
   let dolartoday = respuestaApi[0]
   let dolarBcv   = respuestaApi[1] 


   
   //console.log(dolarBcv)
   //console.log(dolartoday)
 

   //onst estadoInicial = (Number(1.00).toFixed(2))
   
    
     
   const [monto,setMonto] = useState (Number(1.00).toFixed(2));
   const [resultado,setResultado] = useState ("");
   const [valorSelector,setValorSelector] = useState (respuestaApi[0]);

   //setValorSelector(dolartoday)

    //console.log(valorSelector)
   

   //console.log(valores.valor1)
    
   

   useEffect(() =>{

    //selector()

    setResultado(monto * valorSelector )
    
    //console.log(valorSelector)
    
    
   },[monto,valorSelector])

  
 
   function capturavalor1 (e) {  
    setMonto((e.target.value))
   }
   
   //boton que reinica el estado  monto y lo cambia a 1.00 con => Number(1.00).toFixed(2)
   const reiniciarBT = () => {setMonto(Number(1.00).toFixed(2))}
   
    //console.log(`prueba del primer input ${monto}`) 
    //console.log(`prueba del segundo input ${resultado}`) 
    //console.log(`prueba del segundo input ${(resultado).toLocaleString("es-VE", {style:"currency", currency:"VES"})}`) 
     
   



    function selector (e) {

      let valorActualDelSelector = e.target.value

      setValorSelector(valorActualDelSelector)
       
      console.log(`valor del selector  ${valorActualDelSelector}`)

    }

  return (
    <>
 <div className="d-flex justify-content-center">
  <div className="row toto" >
    <img className="col-12 mt-4" src="../public/imagenes/dolar.jpg" alt="dolarlogo" />
    <select  name="sel1" id="sellist1" onChange={selector}  className=" col-1 form-select mt-4  w-100">
        <option value={dolartoday}>DOLARTODAY</option>
        <option value={dolarBcv}>BCV</option>
        <option value="3">PERSONALIZADA</option>
    </select>
         <label type="text" className="colorgry col-12  label d-flex p-2"> Cantidad:</label>
         <input type="number" className="form-control text-right" id="input1" name="input1"  onChange={capturavalor1} value={(monto)}></input>
         <label type="text" className=" colorgry col-12  label d-flex p-2">Resultados en:</label>
         <input type="text" className="form-control text-right " id="input2" name="input2"readOnly={true} value={(resultado).toLocaleString("es-VE", {style:"currency", currency:"VES"})}></input>
         <div className="d-flex justify-content-center">
           <button type="button" className="btn btn-success mt-3 col-4"onClick={reiniciarBT}><i className="bi bi-trash" ></i></button>
         </div>   
   </div>
 </div>
  </>
  )
}
