import React, { Component } from 'react';

import Header from './components/Header/Header'
import Restaurant from './components/Restaurant/Restaurant'
import Spinner from './components/Spinner/Spinner'
import Footer from './components/Footer/Footer'

import './App.css';

import Prismic from 'prismic-javascript'

class App extends Component {
  constructor() {
    super()
    this.state = {
      restaurants: null
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

    return newArray
  }

  /**
   * On component mount, fetch and save the Prismic restaurant data
   */
  componentDidMount() {
    Prismic.getApi("https://lunch-roulette.prismic.io/api/v2").then((api) => {
      return api.query(Prismic.Predicates.at('document.type', 'restaurant'));
    }).then((response) => {
      const restaurantData = response.results.map((res) => res.data)

      // Shuffle the array and set it in our state
      this.setState({
        restaurants: this.shuffleArray(restaurantData)
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.restaurants ? <Restaurant restaurants={this.state.restaurants} /> : <Spinner />}
        <Footer />
      </div>
    );
  }
}

export default App;
