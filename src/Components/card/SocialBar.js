import React, {Component} from 'react';
import './Card.scss';

class SocialBar extends Component {
  render() {
    return (
      <ul className="social-counts">
        <li>
          <i className="fas fa-bullhorn"></i>{this.props.social.ShoutOuts}</li>
        <li>
          <i className="far fa-comment"></i>{this.props.social.Comments}</li>
        <li>
          <i className="fas fa-hourglass-half"></i>{this.props.social.Time}</li>
      </ul>

    );
  }
}

export default SocialBar;
