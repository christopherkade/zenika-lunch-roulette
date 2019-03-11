import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

import Button from './Button/Button'
import Details from './Details/Details'

import './Restaurant.css'

class Restaurant extends React.Component {
  constructor() {
    super()
    this.state = {
      isRunning: true,
      selectedRestaurant: null
    }
  }

  /**
   * Called when the slider selects a new restaurant
   * Sets the selected restaurant in our state
   * @param {*} index - Index of the currently selected restaurant
   */
  updateRestaurant(index) {
    if (!this.props.restaurants[index]) return

    const { title, type, price, maps_url } = this.props.restaurants[index];

    this.setState({
      selectedRestaurant: {
        title: title[0] ? title[0].text : "",
        type: type[0] ? type[0].text : "",
        price: price,
        maps_url: maps_url.url
      }
    })
  }

  /**
   * Runs and stop the slider
   */
  handleClick = () => {
    if (!this.state.selectedRestaurant) return;

    this.state.isRunning ? this.slider.slickPause() : this.slider.slickPlay();

    this.setState({
      isRunning: !this.state.isRunning
    })
  }

  render() {
    const settings = {
      infinite: true,
      speed: 150,
      autoplay: true,
      autoplaySpeed: 100,
      draggable: false,
      pauseOnHover: false,
      arrows: false,
      accessibility: false,
      beforeChange: (_, next) => this.updateRestaurant(next)
    }

    return (
      <div className="restaurant-wrapper">
        <Slider ref={slider => (this.slider = slider)} {...settings} className="slider">
          {this.props.restaurants.map((restaurant) => {
            const title = restaurant.title[0].text
            return (
              <div key={title}>
                <h3 className="restaurant-name">{title}</h3>
              </div>
            )
          })}
        </Slider>
        <div className="arrow-up" />
        <Button isRunning={this.state.isRunning} handleClick={this.handleClick} />
        <Details details={this.state.selectedRestaurant} handleClick={this.handleClick} isRunning={this.state.isRunning} />
      </div>
    )
  }
}

Restaurant.propTypes = {
  restaurants: PropTypes.array
}

export default Restaurant
