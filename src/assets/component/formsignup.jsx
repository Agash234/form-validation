import React from 'react'
import useFrom from '../hooks/useFrom';
import validate from '../udls/validate';

const Formsignup = () => {
    const{handlechange,values,handlesubmit,errors}=useFrom(validate);
   
  return (
    <div className='form-content-right'>
        <form className='form' onSubmit={handlesubmit}>
            <h1>Create your account</h1>
            <div className='form-inputs'>
                <label htmlfor="username" className='form-label'>
                    Username
                </label>
                <input
                id="username" 
                type='text'
                name="username" 
                 className='form-input'
                 placeholder='Enter your username'
                 value={values.username}
                 onChange={handlechange}
                />
                {errors.username && <p>{errors.username}</p>}

            </div>
            <div className='form-inputs'>
                <label htmlfor="Email" className='form-label'>
                Email
                </label>
                <input
                id="Email" 
                type='email'
                name="email" 
                 className='form-input'
                 placeholder='Enter your email'
                 value={values.email}
                  onChange={handlechange}
                />
                {errors.email && <p>{errors.email}</p>}

            </div>
            <div className='form-inputs'>
                <label htmlfor="password" className='form-label'>
                Password
                </label>
                <input
                id="password" 
                type='password'
                name="password" 
                 className='form-input'
                 placeholder='Enter your password'
                 value={values.password}
                 onChange={handlechange}
                />
                {errors.password && <p>{errors.password}</p>}

            </div>
            <div className='form-inputs'>
                <label htmlfor="password2" className='form-label'>
               Confirm Password
                </label>
                <input
                id="password2" 
                type="password"
                name="password2" 
                 className='form-input'
                 placeholder='Enter your Confirm password'
                 value={values.password2}
                 onChange={handlechange}
                />
                {errors.password2 && <p>{errors.password2}</p>}

            </div>
            <button className='form-inputbutton' type='submit'>Signup</button>
            <span className='login'>
                Already have a account? Login <a href="#">here</a>
            </span>

        </form>
    </div>
  )
}

export default Formsignup;