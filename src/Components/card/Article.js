import React, {Component} from 'react';
import {Route, Link} from "react-router-dom";
import './Card.scss';


class Article extends Component {

  render() {
    return (
      <div className="article-container">
        <p className="article-topic">{this.props.article.Topic}</p>
        <p className="article-title">{this.props.article.Title}</p>
        <p className="article-description">{this.props.article.Description}</p>
        <div className="article-details">
          <div className="group">
            <button className="button-clear">
              <i className="fas fa-gift"></i>
              <Link to="/sumbit">submit</Link>
            </button>
            <button className="button-clear">
              <i className="fas fa-clipboard-list"></i>
              <Link to={'/'+ this.props.article.Id}>Details</Link>
            </button>
          </div>
          <p className="article-revenue">{this.props.article.Donation}</p>
        </div>
        <Route path="/article" component={Article}/>        
      </div>
    );
  }
}

export default Article;
