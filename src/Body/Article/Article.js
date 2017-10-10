import React, { Component } from 'react';
import './Article.css';
var sanitizeHtml = require('sanitize-html');

class Article extends Component {
  
  constructor(props) {
      super(props);

      this.state = {
          active: this.props.active
      }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ active: nextProps.active });
  }

  render() {
  	if (!this.props.articles) {
    	return null;
    }
    return (
      <article id="Article">
      	<h1>{this.props.articles[this.state.active].title}</h1>
      	<img src={this.props.articles[this.state.active].urlToImage} alt="Article" />
      	<aside className="Article-sharing">
	      	<a href={"mailto:?subject="+this.props.articles[this.state.active].title+"&amp;body="+this.props.articles[this.state.active].url} rel="noopener noreferrer"><i className="fa fa-envelope-square"></i></a>
	      	<a href={"https://www.facebook.com/sharer/sharer.php?u="+this.props.articles[this.state.active].url} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-official"></i></a>
	      	<a href={"https://twitter.com/intent/tweet?url="+this.props.articles[this.state.active].url} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
	      	<a href={this.props.articles[this.state.active].url} rel="alternate" type="application/rss+xml" target="_blank" rel="noopener noreferrer"><i className="fa fa-rss"></i></a>
      	</aside>
      	<div dangerouslySetInnerHTML={ {__html: sanitizeHtml((this.props.articles[this.state.active].long_description) ? this.props.articles[this.state.active].long_description : this.props.articles[this.state.active].description, { allowedTags: false, allowedAttributes: false }) } }/>
      </article>
    );
  }
}

export default Article;