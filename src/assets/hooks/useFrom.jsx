import React, { useState } from 'react'

const useFrom = (validate) => {
    const[values,setvalues]=useState({
        username:"",
        email:"",
        password:"",
        password2:""

    });
    const[errors,seterrors]=useState({

    });
    const handlechange=(e)=>{
       const{name,value}=e.target;
       setvalues((prevalues)=>{
        return{
            ...prevalues,
            [name]:value,

        } ;      
    })
    };
    const handlesubmit=(event)=>{
        event.preventDefault();
        seterrors(validate(values));
    };



  return {handlechange,values,handlesubmit,errors}
};


export default useFrom;