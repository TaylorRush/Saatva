import React, { Component } from 'react';
import Loader from './../Loader/Loader.js';
import Header from './../Header/Header.js';
import Body from './../Body/Body.js';

class App extends Component {
  
	constructor(props) {
	    super(props);

	    this.state = {
	        data: {},
          loading:true
	    }
	}

	componentDidMount() {
		const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl + "https://s3-us-west-2.amazonaws.com/saatva-hiring/news.json")
            .then( (response) => {
                return response.json() })   
                    .then( (json) => {
                        setTimeout(() => {
                          this.setState({data: json, loading:false}); }, 3000);
                    });
    };

  render() {
  	return ((this.state.loading) ? <Loader /> : <section>
        <Header />
        <Body articles={this.state.data.articles} />
      </section> );}
}

export default App;
