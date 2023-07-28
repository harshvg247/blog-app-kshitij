import { Link } from "react-router-dom";


const Navbar = () => {
    return ( <div className="navbar" id="navbar">
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/sign-in"><li>Sign-in</li></Link>
            <Link to="/sign-up"><li>Sign-up</li></Link>
        </ul>
        <div id="notificationBox"><div id="notification-text"></div></div>
    </div> );
}
 
export default Navbar;