import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Points from "./components/Points";
import images from "./components/cards.json";
import "./App.css";

class App extends Component {

  state = {
    images,
    clickedId: [],
    points: 0,
    goal: 12,
  };

  shuffleCard = id => {
    let clickedId = this.state.clickedId;

    if (clickedId.includes(id)) {
      this.setState({ clickedId: [], points: 0});

      return;
    } else {
      clickedId.push(id)

      if (clickedId.length === 12) {
        this.setState({ points: 12, clickedId: [] });
        return;
      }

      this.setState({ images, clickedId, points: clickedId.length});

      for (let i = images.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="headerTitle">Baseball Memory Game</h1>
          <p className="headerText">
            Click on a picture below but do not to click the same picture twice!
          </p>
          <Points total={this.state.points}
          goal={6}
          status={this.state.status}
        />
        </header>
        
        <Wrapper>
          {this.state.images.map(image => (
            <Card
              shuffleCard={this.shuffleCard}
              id={image.id}
              key={image.id}
              image={image.image}
            />
          ))}
        </Wrapper>

      </div>
    );
  }
}

export default App;