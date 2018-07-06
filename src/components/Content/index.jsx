import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Content.css";
import { addColor, removeColor } from "../../js/color";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Content extends Component {
  constructor(p) {
    super(p);
    this.state = {
      elevation: 5,
      backgroundColor: "#fff",
      transition: "background-color 250ms linear, box-shadow 250ms linear"
    };
  }
  sourceIcon(source) {
    switch (source) {
      case "Instagram":
        return "/icons/instagram.png";
      case "Twitter":
        return "/icons/twitter.svg";
      case "Swarm":
        return "/icons/swarm.png";
      case "Sound Cloud":
        return "/icons/soundcloud.png";
      case "Blogger":
        return "/icons/blogger.png";
      case "Deviant Art":
        return "/icons/deviantart2.png";
      default:
        return "";
    }
  }

  mouseOver = e => {
    var r = Math.floor(Math.random() * 55 + 200);
    var g = Math.floor(Math.random() * 55 + 200);
    var b = Math.floor(Math.random() * 55 + 200);

    var rand = r.toString(16) + g.toString(16) + b.toString(16);
    console.log(e.target)
    this.setState({
      elevation: 3,
      backgroundColor: "#" + rand,
      transition: "background-color 100ms linear, box-shadow 100ms linear"
    });
  };
  
  mouseOut = () => {
    this.setState({
      elevation: 5,
      backgroundColor: "#fff",
      transition: "background-color 250ms linear, box-shadow 250ms linear"
    });
  }

  render() {
    const item = this.props.item;
    return (
      <Card
        className="content-card"
        elevation={this.state.elevation}
        style={{backgroundColor: this.state.backgroundColor, transition: this.state.transition}}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
      >
        <CardMedia>
          <div dangerouslySetInnerHTML={{ __html: item.media }} />
        </CardMedia>
        {item.content && (
          <CardContent>
            <Typography component="p" className="content-text">
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </Typography>
          </CardContent>
        )}
        {item.link && (
          <CardActions>
            <div className="content-source">
              <Button href={item.link}>
                On {item.source} <img className="content-img" src={this.sourceIcon(item.source)} alt="" />
              </Button>
              <span className="content-date">{item.date.toLocaleString("en-US")}</span>
            </div>
          </CardActions>
        )}
      </Card>
    );
  }
}

Content.propTypes = {
  item: PropTypes.object.isRequired
};

export default Content;
