import React from 'react'
import Slider from "react-slick";

import iconFork from './fork.svg'
import iconRestart from './restart.svg'

import './Restaurant.css'

class Restaurant extends React.Component {
  constructor() {
    super()
    this.state = {
      isRunning: false
    }
  }  

  /**
   * Runs and stop the slider
   */
  handleClick = () => {  
    this.state.isRunning ?  this.slider.slickPlay() : this.slider.slickPause();
    
    this.setState({
      isRunning: !this.state.isRunning
    })
  }

  render() {
    const buttonIcon = this.state.isRunning ? iconRestart : iconFork
    
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
        <button className="button-stop" onClick={this.handleClick}>        
          <img className="button-icon" src={buttonIcon} alt="forkIcon" />
        </button>
      </div>
    )
  }  
}

export default Restaurant