import { Component } from "react";
import './navbar.style.css';
class NavBar extends Component{
render(){
    return(
        <nav>
<img src="https://th.bing.com/th/id/R.cfc24082d19c9749fa6084e56be21ebf?rik=pMbRJ1O6ebkJig&pid=ImgRaw&r=0" alt="github logo" />
<p><span className="git">Git</span><span className="hub">Hub </span>  </p>
<h3> user finder </h3>
        </nav>

    );
}
}
export default NavBar;