import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Project.css";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Project = ({ title, date, description, images, buttons, video }) => (
  <Card className="project-card">
    {images &&
      !!images.length && (
        <CardMedia>
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
          >
            {images.map(function(image) {
              return (
                <div>
                  <img className="project-img" src={image} alt="" />
                </div>
              );
            })}
          </Carousel>
        </CardMedia>
      )}
    {video && (
      <CardMedia>
        <video muted loop autoPlay src={video} className="project-img" />
      </CardMedia>
    )}
    <CardContent className="project-text">
      <Typography component="p">
        <span className="project-title">{title}</span>
        <span className="project-date">{date}</span>
      </Typography>
      <Typography>
        <br /> <br />
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Typography>
    </CardContent>
    {buttons &&
      !!buttons.length && (
        <CardActions>
          {buttons.map(function(button) {
            return (
              <Button href={button.link}>
                {button.icon && <Icon>{button.icon}</Icon>}
                {button.text}
              </Button>
            );
          })}
        </CardActions>
      )}
  </Card>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  buttons: PropTypes.arrayOf(PropTypes.object),
  video: PropTypes.string
};

export default Project;
