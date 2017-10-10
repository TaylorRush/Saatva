import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {

  constructor(props) {
      super(props);

      this.state = {
          isListShowing: false,
          active: this.props.active,
          hoverState:{num:-1, isHovering:false}
      }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ active: nextProps.active });
  }

  btnHandler = function() {
    this.setState({isListShowing:(this.state.isListShowing) ? false : true})
  }

  clickHandler = function(e) {
    var nodes = Array.prototype.slice.call( e.currentTarget.children );
    var index = nodes.indexOf( e.target );
    this.props.setActive(index);
    if (this.state.isListShowing) {
      this.btnHandler();
    }
  }
  
  mouseOverHandler = function(e) {
    var nodes = Array.prototype.slice.call( e.currentTarget.children );
    var index = nodes.indexOf( e.target );
    if (e.currentTarget.children[index]) {
      this.setState({ hoverState: {num:index, isHovering:true} });
    }
  }

  mouseOutHandler = function(e) {
    var nodes = Array.prototype.slice.call( e.currentTarget.children );
    var index = nodes.indexOf( e.target );
    if (e.currentTarget.children[index]) {
      this.setState({ hoverState: {num:-1, isHovering:false} });
    }
  }
  
  render() {

    const listItems = this.props.articles.map(function(article, index) {
      
      return <li className={((this.state.hoverState.num === index && this.state.hoverState.isHovering === true) || (this.state.active === index)) ? "Sidebar-item showBg" : "Sidebar-item"} style={{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),url('"+article.urlToImage+"')"}} key={article.title} >{article.title}</li>
    
    }, this);

    return (
      <aside id="Sidebar">
        <button id="Sidebar-dropdown" onClick={ this.btnHandler.bind(this) }>Choose an Article<span id="Sidebar-menuIcon" className={(this.state.isListShowing) ? "fa fa-times" : "fa fa-bars"}></span></button>
        <ul id="Sidebar-list" ref="sidebar" className={(this.state.isListShowing) ? "show" : ""} onClick={ this.clickHandler.bind(this) } onMouseOver={ this.mouseOverHandler.bind(this) } onMouseOut={ this.mouseOutHandler.bind(this) }>
			    {listItems}
	      </ul>
      </aside>
    );
  }

}

export default Sidebar;
