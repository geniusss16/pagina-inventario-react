import React from 'react'
import "../hojas-de-estilos/Convertidor.css"
import { useState,useEffect } from 'react'


export const Convertidor = () => {

  const valores = [
   {
    moneda: "usa",
    valor1: 8.31

   }
  
  ]

 /*  useState((0).toFixed(2))
 */

   /*  valor inicial del input 1 => */
   const [monto,setMonto] = useState (Number().toFixed(2));
   const [resultado,setResultado] = useState ("");


   function actualizar () {

    
   }
   
  
    // useEffect(() => {
    //  console.log(`prueba del primer input ${monto}`) 
      
    //  let midorilla = 3

    //  setMonto2( midorilla )
    //  console.log(`prueba del segundo input ${monto2}`)
    // }, [monto]);


   function capturavalor1 (e) {  
    setMonto(e.target.value)
    setResultado(monto * valores[0].valor1)

   }
    
    console.log(`prueba del primer input ${monto}`) 
    console.log(`prueba del segundo input ${resultado}`) 

  return (
    <>
 <div className="d-flex justify-content-center">
  <div className="row toto" >
    <img className="col-12 mt-4" src="../public/imagenes/dolar.jpg" alt="dolarlogo" />
    <select  name="sel1" id="sellist1" className=" col-1 form-select mt-4  w-100 ">
        <option value="1">DOLARTODAY</option>
        <option value="2">BCV</option>
        <option value="3">PERSONALIZADA</option>
    </select>
         <label type="text" className="colorgry col-12  label d-flex p-2"> Cantidad:</label>
         <input type="number" className="form-control text-right" id="input1" name="input1" step="0.01" onChange={capturavalor1} ></input>
         <label type="text" className=" colorgry col-12  label d-flex p-2">Resultados en:</label>
         <input type="number" className="form-control text-right " id="input1" name="input1"readOnly={true} value={Number(resultado).toFixed(2)}></input>
         <div className="d-flex justify-content-center">
           <button type="button" className="btn btn-success mt-3 col-4"><i className="bi bi-trash"></i></button>
         </div>   
   </div>
 </div>
  </>
  )
}
