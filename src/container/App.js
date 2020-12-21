import React, { Component } from "react";
import "./App.css";
import Navigation from "../component/Navigation";
import Logo from "../component/Logo";
import Form from "../component/ImageForm";
import Rank from "../component/Rank";
import Face from "../component/FaceRecognition";
//External NPM Packages
import "tachyons";
import Particles from "react-particles-js";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "11061f10deaf4aaabea6e107957e04df",
});

const particle = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 250,
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function (response) {
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
      },

      function (err) {}
    );
  };

  render() {
    return (
      <div>
        <Navigation />
        <Logo />
        <Rank />
        <Form
          inputChange={this.onInputChange}
          buttonSubmit={this.onButtonSubmit}
        />
        <Face imageUrl={this.state.imageUrl} />
        <Particles className="particles" params={particle} />
      </div>
    );
  }
}

export default App;
