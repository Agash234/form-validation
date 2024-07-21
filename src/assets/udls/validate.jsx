export default function validate(values){
    let errors={};
    
    
    if(!values.username.trim()){
        errors.username="username required"
    }
    if(!values.email.trim()){
        errors.email="Email required"
    }
  
    else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
        errors.email="Email address invalid"

    }
    if(!values.password.trim()){
        errors.password="password is invalid"
    }
    else if(values.password.length>8){
        errors.password="password should be 8 characters"
    }
    if(!values.password2.trim()){
    errors.password2="password is required"
    }
    else if(values.password2!==values.password){
        errors.password2="password do not match"
    }
    return errors;
    
}