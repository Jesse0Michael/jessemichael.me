import React, { Component } from "react";
import Content from "../../components/Content";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Content
          item={{
            media: '<img src="https://media.giphy.com/media/26DNdSG6Q0AAiBJ3q/giphy.gif" />',
            description: "got the keys",
            source: "Twitter",
            link: "http://twitter.com/",
            date: "123456752235"
          }}
        />
      </div>
    );
  }
}

export default Home;
