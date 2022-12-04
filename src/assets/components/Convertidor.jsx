import React from 'react'
import "../hojas-de-estilos/Convertidor.css"
import { useState,useEffect } from 'react'
import Api from '../../helper/FetchApi'


export const Convertidor = () => {

  const dolartoday = Api()
  console.log(dolartoday)

  const estadoInicial = (Number(1.00).toFixed(2))
   
   const [monto,setMonto] = useState (estadoInicial);
   const [resultado,setResultado] = useState ("");

  const valores = [
   {
    moneda: "usa",
    valor1:  dolartoday

   }
  ]

  useEffect(() =>{

   setResultado(monto * valores[0].valor1)

  },[monto])

  
   function capturavalor1 (e) {  
    setMonto((e.target.value))
   }

   const reiniciarBT = () => {setMonto(estadoInicial)}
   
    console.log(`prueba del primer input ${monto}`) 
    console.log(`prueba del segundo input ${resultado}`) 
    console.log(`prueba del segundo input ${(resultado).toLocaleString("es-VE", {style:"currency", currency:"VES"})}`) 

  
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
