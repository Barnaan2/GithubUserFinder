import { Component } from "react";
import "./card.style.css";
class Card extends Component{
    render (){
        const { id, location,avatar_url, followers,public_repos,login,url } = this.props.user
        return(
<div className="card">

    <div key={id}>
    <img src={avatar_url} alt="user image" />
    
    <p className="user">User   :   {login}</p>
    <p className="fol">Followers :       {followers}</p>
    <p className="loc"> Location :      {location}</p>
    <p className="repo"> Repositories :     {public_repos} </p>
    </div>
   
</div> );
    }
}

export default Card;