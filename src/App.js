import { Component } from 'react';
import NavBar from './components/navbar/navbar.component';
import Card from './components/card/card.component';
import Footer from './components/footer/footer.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user:{}
    }
  }
  componentDidMount(){
    const url = "https://api.github.com/users/Barnaan2";
    fetch(url).then((response)=>response.json()).then((user)=>this.setState(()=>{return{user:user}}))
      
  }
  onSearch=(event)=>{
    const value = event.target.value.toLocaleLowerCase();
  
    const updated = "/" + value;
   const url = "";
    if(updated == "/"){
      this.url = "https://api.github.com/users/Barnaan2";
     }
    else{
      console.log(updated)
      this.url = "https://api.github.com/users"  + updated;
     
    }
   
     
  fetch(this.url).then((response)=>response.json()).then((user)=>this.setState(()=>{return{
    user:user
  }}))
   
  }
  
  
  render () {
return (
      <div className="App">

        <NavBar/>
        <SearchBox changer={this.onSearch} />
       <Card user={this.state.user}/>
       <Footer/>
      </div>
    );
  }
 
}

export default App;
