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
      imageBox: {},
    };
  }

  calculateFace = (data) => {
    const faceBox = data.outputs[0].data.regions[0].region_info.bounding_box;
    const imgBox = document.getElementById("img");
    const width = Number(imgBox.width);
    const height = Number(imgBox.height);
    return {
      leftCol: faceBox.left_col * width,
      topRow: faceBox.top_row * height,
      rightCol: width - faceBox.right_col * width,
      bottomRow: height - faceBox.bottom_row * height,
    };
  };

  displayBox = (imageBox) => {
    console.log(imageBox);
    this.setState({ imageBox });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => {
        this.displayBox(this.calculateFace(response)).catch((err) => {
          console.log(err);
        });
      });
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
        <Face box={this.state.imageBox} imageUrl={this.state.imageUrl} />
        <Particles className="particles" params={particle} />
      </div>
    );
  }
}

export default App;
