import React, { Component } from 'react';
import './Loader.css';

class Loader extends Component {
  render() {
    return (
		<div id="Loader-container">
			<div className="Loader-loader">
				<div id="Loader-largeBox"></div>
				<div id="Loader-smallBox"></div>
			</div>
		</div>
    );
  }
}

export default Loader;
