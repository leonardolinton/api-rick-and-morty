import { Component } from "react";
import Header from "./components/Header";
import Api from "./components/Api";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Api />
      </>
    );
  }
}

export default App;
