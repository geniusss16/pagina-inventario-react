//@ts-chec4
import { useState, useEffect } from "react";

   


 const FetchApi = () => {
   const [dolarT, setDolarT] = useState(1)
   const [dolarBcv, setDolarBcv] = useState("")

   
  
   const dataDolar = async () => {

   const data = await fetch("https://s3.amazonaws.com/dolartoday/data.json");
   const dataJson = await data.json();

    //console.log(dataJson.USD.dolartoday);
    
    setDolarT(dataJson.USD.dolartoday)
    setDolarBcv(dataJson.USD.promedio_real)
    
    console.log("estoy activo papu")
  };


  useEffect(() => {
    dataDolar();

    //setDolarT(dataJson.USD.dolartoday);
  }, []);

 
 useEffect(() => {

 console.log(dolarT)


 }, [dolarBcv])



  return[dolarT , dolarBcv] 
   


};

export default FetchApi;
