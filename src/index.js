import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import AppHeaderBar from "./components/AppHeaderBar";
import "./styles.css";
import DogCardGallery from "./components/DogCardGallery";
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <AppHeaderBar />
      </Fragment>
    );
  }
}

const rootElement = document.getElementById("second");
ReactDOM.render(<DogCardGallery id="second" />, rootElement);
const secondElement = document.getElementById("root");
ReactDOM.render(<App />, secondElement);
