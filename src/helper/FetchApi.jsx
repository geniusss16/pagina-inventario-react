//@ts-chec4
import { useState, useEffect } from "react";

const FetchApi = () => {


   const [dolarT, setDolarT] = useState("")
   const [dolarBcv, setDolarBcv] = useState("")

  const dataDolar = async () => {
    const data = await fetch("https://s3.amazonaws.com/dolartoday/data.json");
    const dataJson = await data.json();

    //console.log(dataJson.USD.dolartoday);
    
    setDolarT(dataJson.USD.dolartoday)
    setDolarBcv(dataJson.USD.promedio_real)
    //console.log(dolarBcv);
  };


  useEffect(() => {
    dataDolar();
    
    //setDolarT(dataJson.USD.dolartoday);
  }, []);

 //console.log(dolarT)

  return[dolarT , dolarBcv] 
   


};

export default FetchApi;
