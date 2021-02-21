import React, { Component } from "react";
import "./App.css";
import SignIn from "../component/SignIn";
import Register from "../component/Register";
import Navigation from "../component/Navigation";
import Logo from "../component/Logo";
import Form from "../component/ImageForm";
import Rank from "../component/Rank";
import Face from "../component/FaceRecognition";



/****External NPM Packages****/
import "tachyons";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
/**************************/



/**********Api Key***********/
const app = new Clarifai.App({
  apiKey: "11061f10deaf4aaabea6e107957e04df",
});
/**************************/



/***Background Particle***/
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
/**************************/



class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      imageBox: {},
      route: "signin",
      isSignedIn: false,
      user: {
        id: "",
        email: "",
        name: "",
        entries: 0,
        joined: "",
      },
    };
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

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
        if (response) {
          fetch("http://localhost:3000/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            });
        }
        this.displayBox(this.calculateFace(response));
      })
      .catch((err) => console.log(err));
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, imageBox, imageUrl, route } = this.state;
    if (route === "home") {
      return (
        <div>
          <Navigation isSignedIn={true} onRouteChange={this.onRouteChange} />
          <Logo />
          <Rank name={this.state.user.name} entries={this.state.user.entries} />
          <Form
            inputChange={this.onInputChange}
            buttonSubmit={this.onButtonSubmit}
          />
          <Face box={imageBox} imageUrl={imageUrl} />
          <Particles className="particles" params={particle} />
        </div>
      );
    } else if (route === "signin") {
      return (
        <div>
          <Logo />
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        </div>
      );
    } else {
      return (
        <div>
          <Logo />
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        </div>
      );
    }
  }
}

export default App;
