import { Searchbar } from "./searchbar/Searchbar";
import { Component, React } from "react";
import axios from "axios";

export class App extends Component {
  state = {

  }
  onSubmit = e => {
    e.preventDefault();
    console.log(e);
  }
  render() {
   return (
    <>
      <Searchbar onSubmit={this.onSubmit}/>
    </>
  );
 }
};
