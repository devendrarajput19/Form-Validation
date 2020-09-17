export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()){
        errors.username = "Username Required"
    }

    //Email

    if(!values.email) {
        errors.email = "Email Required"
    } else if(!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i.test(values.email)) {
        errors.email = "Email Address is invalid"
    }

    if(!values.password){
        errors.password = "Password is required."
    } else if (values.password.length < 6){
        errors.password = "Password should be 6 characters or more."
    }

    if(!values.password2){
        errors.password2 = "Password is required."
    } else if (values.password2 !== values.password){
        errors.password2 = "Passwords do not match"
    }

    return errors;
}