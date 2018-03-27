import React, { Component } from 'react';
import {Route, Link} from "react-router-dom";
import './Card.scss';

class Card extends Component {
  render() {
    return (
      <div className="header">
      <div className="avatar-item">
        <img src={this.props.user.Img} className="thumbnail"/>
        <div className="title-container">
          <p className="title">{this.props.user.Name}</p>
          <p className="description">{this.props.user.Description}</p>
        </div>
      </div>
      <button className="button-danger small">
      <Link to="/new">New</Link> 
      </button>
      <Route exact path="/new"/>
    </div>
    );
  }
}

export default Card;
