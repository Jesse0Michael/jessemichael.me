import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Content.css";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Content extends Component {
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

  render() {
    const item = this.props.item;
    return (
      <Card className="content-card">
        <CardMedia>
          <div dangerouslySetInnerHTML={{ __html: item.media }} />
        </CardMedia>
        {item.content && (
          <CardContent>
            <Typography component="p" className="content-text">
              <div dangerouslySetInnerHTML={{__html: item.content}} />
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
