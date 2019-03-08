import React, { Component } from 'react';

import Restaurant from './components/Restaurant/Restaurant'
import Header from './components/Header/Header'
import './App.css';

import Prismic from 'prismic-javascript'

class App extends Component {
  constructor() {
    super()
    this.state = {
      restaurants: []
    }
  }

  /**
   * On component mount, fetch and save the Prismic restaurant data
   */
  componentDidMount() {
    console.log("Component has mounted, fetching restaurant data");

    Prismic.getApi("https://lunch-roulette.prismic.io/api/v2").then((api) => {
      return api.query(Prismic.Predicates.at('document.type', 'restaurant'));
    }).then((response) => {
      const restaurantData = response.results.map((res) => res.data)
      this.setState({
        restaurants: restaurantData
      })
    })
  }

  render() {
    return (
      <div className="App">        
        <Header />
        <Restaurant restaurants={this.state.restaurants} />
      </div>
    );
  }
}

export default App;
