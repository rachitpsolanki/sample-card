import React, {Component} from 'react';
import './Card.scss';

class Backers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: null
        };
    }

    handleMouseOver(element, i) {
        this.setState({key: i});
    }

    handleMouseOut() {
        this.setState({key: null});
    }

    handleUI(elem) {
        return {
            display: elem.Name == this.state.element.Name
                ? ''
                : 'none'
        };
    }

    render() {
        return (
            <div className="backers-container">
                <p className="backers-title">Backers(1890)</p>
                <div className="backers-list">
                    {this
                        .props
                        .backers
                        .map((element, i) => {
                            return (
                                <div key={i} className="hoverDiv">
                                    <span
                                        style={{
                                        display: i === this.state.key
                                            ? ''
                                            : 'none'
                                    }}>
                                        <p>{element.Name}</p>
                                        <p>{element.Description}</p>
                                        <i className="fas fa-map-marker"></i>
                                    </span>
                                    <img
                                        src={element.Img}
                                        className="thumbnail"
                                        onMouseOver={this
                                        .handleMouseOver
                                        .bind(this, element, i)}
                                        onMouseOut={this
                                        .handleMouseOut
                                        .bind(this)}/>
                                </div>
                            )
                        })}
                </div>
            </div>
        );
    }
}

export default Backers;
