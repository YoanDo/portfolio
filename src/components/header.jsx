import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div id="header">
        <h4>Yoan Dorny.</h4>
          <Parallax
            className="custom-class"
            offsetXMax={100}
            offsetXMin={-100}
            slowerScrollRate={true}
          >
            <h1 className="header-text slideInUp">
              °/yo
            </h1>
        </Parallax>
      </div>
    );
  }
}
