import { Component } from "react";
import Header from "./components/Header";
import Api from "./components/Api";
import Music from './components/Music';

class App extends Component{
  render(){

    return(
     <>
      
      <Header/>
      <Api />
      <Music/>
     </>

    )
  }
}

export default App;