import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Content from "../../components/Content";
import "./Home.css";
import Fetcher from "./Fetcher";

const fetcher = new Fetcher();

class Home extends Component {
  constructor(p) {
    super(p);
    this.state = { items: [] };
  }

  componentDidMount() {
    fetcher.Fetch().then(i => {
      this.setState({ items: i });
    });
  }

  render() {
    return (
      <div className="home">
        <Grid container className="home-grid">
          {this.state.items &&
            this.state.items.map(function(item) {
              return (
                <div className="home-grid-item">
                  <Grid item>
                    <Content item={item} />
                  </Grid>
                </div>
              );
            })}
        </Grid>
      </div>
    );
  }
}

export default Home;
