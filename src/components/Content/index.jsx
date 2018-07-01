import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Content.css";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ContentItem from "./ContentItem.ts";

class Content extends Component {
  sourceIcon(source) {
    switch (source) {
      case "Instagram":
        return "/icons/instagramBW.png";
      case "Twitter":
        return "/icons/twitterBW.svg";
      case "Swarm":
        return "/icons/swarmBW.png";
      case "Sound Cloud":
        return "/icons/soundcloudBW.png";
      case "Blogger":
        return "/icons/bloggerBW.png";
      default:
        return "";
    }
  }

  render() {
    const item = this.props.item;
    return (
      <Card className="content-card">
        <CardMedia className="content-media">{item.media}</CardMedia>
        <CardContent>
          <Typography component="p" className="content-text">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <div className="content-source">
            <Button href={item.link}>
              On {item.source} <img className="content-img" src={this.sourceIcon(item.source)} />
            </Button>
            <span className="content-date">{item.date}</span>
          </div>
        </CardActions>
      </Card>
    );
  }
}

Content.propTypes = {
  item: PropTypes.object.isRequired
};

export default Content;
