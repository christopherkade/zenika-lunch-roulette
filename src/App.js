import React, { Component } from 'react';

import Restaurant from './components/Restaurant/Restaurant'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
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
   * Shuffles our restaurant array and saves it
   * @param {*} array 
   */
  shuffleArray(array) {
    let newArray = []

    while (array.length !== 0) {
      let randomIndex = Math.floor(Math.random() * array.length)
      newArray.push(array[randomIndex])
      array.splice(randomIndex, 1)
    }

    this.setState({
      restaurants: newArray
    })
  }

  /**
   * On component mount, fetch and save the Prismic restaurant data
   */
  componentDidMount() {
    Prismic.getApi("https://lunch-roulette.prismic.io/api/v2").then((api) => {
      return api.query(Prismic.Predicates.at('document.type', 'restaurant'));
    }).then((response) => {
      const restaurantData = response.results.map((res) => res.data)
      this.shuffleArray(restaurantData)
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.restaurants.length > 0 ? <Restaurant restaurants={this.state.restaurants} /> : null}
        <Footer />
      </div>
    );
  }
}

export default App;
