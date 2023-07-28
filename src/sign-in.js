import { useState } from "react";
import Validate from "./validation";


const displayMessage=(message)=>{
  let notification=document.getElementById("notification-text");
  let box=document.getElementById("notificationBox");
  notification.innerHTML=message;
  box.style.display="flex";
  setTimeout(()=>{
      box.style.display="none";
  },2000)
}

const SignIn = () => {

    const [errors,setErrors]=useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validate(values));
    console.log(Object.keys(Validate(values)).length);
    if(Object.keys(Validate(values)).length){
      displayMessage("Invalid credentials");
    }else{
      displayMessage("Sign-in successfull");
    }

  };

 
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    
  };
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="container">
      <div className="inner-container">
        <div className="title">Create Account</div>
        <div className="form">
          <form>
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

export default SignIn;
