import React, { Component } from 'react';
import './Body.css';
import Sidebar from './Sidebar/Sidebar.js';
import Article from './Article/Article.js';

class Body extends Component {

  constructor(props) {
      super(props);

      this.state = {
          active: 0
      }
  }

  setActive(myNum) {
    this.setState({
      active: myNum
    })
  }

  render() {
    return (
      <section id="Body">
      	<Sidebar articles={this.props.articles} active={this.state.active} setActive = {this.setActive.bind(this)} />
      	<Article articles={this.props.articles} active={this.state.active} />      
      </section>
    );
  }
  
}

export default Body;
