import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Navbar from "./navbar";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import Notify from "./notification";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Navbar/>
       <Notify/>
       <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/sign-in" element={<SignIn/>}/>
        <Route exact path="/sign-up" element={<SignUp/>}/>
        
       </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
