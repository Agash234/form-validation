import React from 'react'
import Formsignup from './formsignup';
import "./form.css";

const Form = () => {
    
  return (
    <>
    <div className='form-container'>
      <span className='close-btn'>X</span>
      <div className='form-content-left'>
        <img src="https://www.pinclipart.com/picdir/big/344-3448580_rocket-clipart-png-rocket-ship-png-transparent-png.png "alt="left" className="form-image"></img>
      </div>
      <Formsignup/>
      </div>
       
       

    </>
  )
}

export default Form;