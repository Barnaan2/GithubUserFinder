import { Component } from "react";

import "./search-box.style.css";
class SearchBox extends Component{

    render (){


         return(
        <div className="searchBox">
            <div>
            <input type="search" onChange={this.props.changer} placeholder="Search by github username" />
            </div>

        </div>


         );
    }
}
export default SearchBox;