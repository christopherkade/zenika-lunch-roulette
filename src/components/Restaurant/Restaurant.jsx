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
      selectedRestaurant: {},
    }
  }

  updateRestaurant(index) {
    if (!this.props.restaurants[index]) return
    const { title, type, price, maps_url } = this.props.restaurants[index];

    const restaurant = {
      title: title[0] ? title[0].text : "",
      type: type[0] ? type[0].text : "",
      price: price,
      maps_url: maps_url.url,
    }

    this.setState({ selectedRestaurant: restaurant })
  }

  /**
   * Runs and stop the slider
   */
  handleClick = () => {
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
      pauseOnHover: false,
      arrows: false,
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
        <div className="arrow-up"></div>
        <Button isRunning={this.state.isRunning} handleClick={this.handleClick} />
        {!this.state.isRunning ? <Details details={this.state.selectedRestaurant} /> : <div></div>}
      </div>
    )
  }
}

Restaurant.propTypes = {
  restaurants: PropTypes.array
}

export default Restaurant