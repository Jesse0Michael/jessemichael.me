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
        <Grid container spacing={32} justify="space-between">
          {this.state.items && this.state.items.map(function(item) {
            return (
              <Grid item>
                <Content item={item} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default Home;
