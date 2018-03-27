import React, {Component} from 'react';
import './Card.scss';
import Header from './Header';
import Article from './Article';
import Backers from './Backers';
import SocialBar from './SocialBar';
import Data from '../../Data/Data';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <Header user={Data.User}></Header>
        <div style={imgStyle} className="card-img"></div>
        <div className="container">
          <Article article={Data.Article}></Article>
          <Backers backers={Data.Backers}></Backers>
          <SocialBar social={Data.Social}></SocialBar>
        </div>
      </div>
    );
  }
}
const imgStyle = {
  backgroundImage: 'url(' + Data.Article.Img + ')'
};

export default Card;
