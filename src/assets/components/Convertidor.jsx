import React from 'react'
import "../hojas-de-estilos/Convertidor.css"

export const Convertidor = () => {
  return (
    <>
    <div className='d-flex justify-content-center p-5'>
 <div className='toto' >
    <select  name="sel1" id="sellist1" className="form-select  w-100 ">
        <option value="1">DOLARTODAY</option>
        <option value="2">BCV</option>
        <option value="3">PERSONALIZADA</option>
    </select>
         <label className="label d-flex flex-row-reverse p-2"> 1</label>
   </div>
    </div>
  
    </>
  )
}
