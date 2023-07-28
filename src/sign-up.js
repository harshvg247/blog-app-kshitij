import { useState } from "react";
import Validate from "./validation";

const SignUp = () => {

  const displayMessage=(message)=>{
    let notification=document.getElementById("notification-text");
    let box=document.getElementById("notificationBox");
    notification.innerHTML=message;
    box.style.display="flex";
    setTimeout(()=>{
        box.style.display="none";
    },2000)
  }

    const [errors,setErrors]=useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validate(values));
    if(Object.keys(Validate(values)).length){
      displayMessage("Invalid credentials");
    }else{
      displayMessage("Sign-up successfull");
    }
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const [values, setValues] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    passwordConfirm: "",
  });

  

  return (
    <div className="container">
      <div className="inner-container">
        <div className="title">Create Account</div>
        <div className="form">
          <form>
            <div className="name">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
                {errors.name&&<div className="error">{errors.name}</div>}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email&&<div className="error">{errors.email}</div>}
            </div>
            <div className="number">
              <label htmlFor="number">Phone Number</label>
              <input
                type="number"
                id="number"
                name="number"
                value={values.number}
                onChange={handleChange}
              />
              {errors.number&&<div className="error">{errors.number}</div>}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password&&<div className="error">{errors.password}</div>}
            </div>
            <div className="passwordConfirm">
              <label htmlFor="passwordConfirm">Confirm Password</label>
              <input
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                value={values.passwordConfirm}
                onChange={handleChange}
              />
              {errors.passwordConfirm&&<div className="error">{errors.passwordConfirm}</div>}
            </div>
            <div className="submit">
              <button id="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
