import React from 'react'
import "../hojas-de-estilos/Convertidor.css"

export const Convertidor = () => {
  return (
    <>
 <div className='d-flex justify-content-center '>
  <div className='row toto' >
    <img className='col-12 mt-4' src="../public/imagenes/dolar.jpg" alt="dolarlogo" />
    <select  name="sel1" id="sellist1" className=" col-1 form-select mt-4  w-100 ">
        <option value="1">DOLARTODAY</option>
        <option value="2">BCV</option>
        <option value="3">PERSONALIZADA</option>
    </select>
         <label type='number' className=" colorgry col-12  label d-flex p-2"> Cantidad:</label>
         <input type="text" class="form-control" id="input1" name="input1"></input>
         <label type='number' className=" colorgry col-12  label d-flex p-2">Resultados en:</label>
         <input type="text" class="form-control" id="input1" name="input1"></input>
         <div className="d-flex justify-content-center">
           <button type="button" className="btn btn-success mt-3 col-4"><i class="bi bi-trash"></i></button>
         </div>   
   </div>
 </div>
  
    </>
  )
}
