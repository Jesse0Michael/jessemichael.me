import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Content.css";
import ContentMedia from "../ContentMedia";
import Card from "@material-ui/core/Card";
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
      transition: "background-color 250ms linear, box-shadow 250ms linear",
    };
  }
  sourceIcon(source) {
    switch (source) {
      case "instagram":
        return "/icons/instagram.png";
      case "twitter":
        return "/icons/twitter.svg";
      case "swarm":
        return "/icons/swarm.png";
      case "soundcloud":
        return "/icons/soundcloud.svg";
      case "blogger":
        return "/icons/blogger.svg";
      case "deviantart":
        return "/icons/deviantart.svg";
      default:
        return "";
    }
  }

  sourceName(source) {
    switch (source) {
      case "instagram":
        return "Instagram";
      case "twitter":
        return "Twitter";
      case "swarm":
        return "Swarm";
      case "soundcloud":
        return "Sound Cloud";
      case "blogger":
        return "Blogger";
      case "deviantart":
        return "Deviant Art";
      default:
        return "";
    }
  }

  mouseOver = e => {
    var r = Math.floor(Math.random() * 55 + 200);
    var g = Math.floor(Math.random() * 55 + 200);
    var b = Math.floor(Math.random() * 55 + 200);

    var rand = r.toString(16) + g.toString(16) + b.toString(16);
    this.setState({
      elevation: 3,
      backgroundColor: "#" + rand,
      transition: "background-color 100ms linear, box-shadow 100ms linear"
    });

    Array.from(e.currentTarget.getElementsByTagName('video')).forEach(video => {
      video.play()
    });
  };

  mouseOut = e => {
    this.setState({
      elevation: 5,
      backgroundColor: "#fff",
      transition: "background-color 250ms linear, box-shadow 250ms linear"
    });
    Array.from(e.currentTarget.getElementsByTagName('video')).forEach(video => {
      video.pause()
    });
  };

  render() {
    const item = this.props.item;
    return (
      <Card
        elevation={this.state.elevation}
        style={{ backgroundColor: this.state.backgroundColor, transition: this.state.transition }}
        onMouseEnter={this.mouseOver}
        onMouseLeave={this.mouseOut}
      >
        {item.media && item.media.length > 0 && (
          <ContentMedia media={item.media} id={item.id} />
        )}
        {item.content && (
          <CardContent>
            <Typography component="p" className="content-text">
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </Typography>
          </CardContent>
        )}
        {item.url && (
          <CardActions>
            <div className="content-source">
              <Button href={item.url}>
                On {this.sourceName(item.source)} <img className="content-img" src={this.sourceIcon(item.source)} alt="" />
              </Button>
              <span className="content-date">{new Date(item.ts * 1000).toLocaleString("en-US")}</span>
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
