const Validate = (values) => {
    let errors={};
    if(!values.name&&values.name!=undefined
        ){
        console.log(values.name);
        errors.name="Name is required";
    }
    if(!values.email&&values.email!=undefined){
        errors.email="Email is required";
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Enter valid email";

    }
    if(!values.number&&values.number!=undefined){
        errors.number="Number is required";
    }else if(values.number!=undefined&&values.number.toString().length!=10){
        errors.number="Enter valid 10-digit numeber";
    }
    if(!values.password&&values.password!=undefined){
        errors.password="Password is required";
    }else if(values.password!=undefined&&values.password.length<=5){
        errors.password="Password must have more than 5 characters";
    }else if(values.passwordConfirm!==values.password&&values.passwordConfirm!=undefined){
        errors.passwordConfirm="Password do not match";
    }

    return ( errors );
}
 
export default Validate;