import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ContentMedia.css";
import CardMedia from "@material-ui/core/CardMedia";

class ContentMedia extends Component {
  constructor(p) {
    super(p);
    this.state = {
    };
  }

  render() {
    const media = this.props.media;
    const id = this.props.id;
    var content = '';
    if (media[0].kind === "video") {
      content = '<video id = "' + id +
        '" poster="' + media[0].poster + '" class="content-media"><source src = "' +
        media[0].url + "\" type='video/mp4'></video>";
    } else {
      content = "<img class='content-media' src = '" + media[0].url + "' />";
    }
    return (
      <CardMedia>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </CardMedia>
    );
  }
}

ContentMedia.propTypes = {
  media: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired
};

export default ContentMedia;
