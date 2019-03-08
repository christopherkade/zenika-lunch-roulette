import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

import Button from './Button/Button'

import './Restaurant.css'

class Restaurant extends React.Component {
  constructor() {
    super()
    this.state = {
      isRunning: true
    }
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
      arrows: false
    }

    return (
      <div>
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
      </div>
    )
  }
}

Restaurant.propTypes = {
  restaurants: PropTypes.array
}

export default Restaurant