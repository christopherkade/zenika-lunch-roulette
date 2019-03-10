import React from 'react'
import PropTypes from 'prop-types'

import MapsIcon from './google.svg'

import './Details.css'

function Details(props) {
  if (props.isRunning) return null

  const price = Array(parseInt(props.details.price)).fill('💰')

  return (
    <div>
      <div className="details-wrapper">
        <div className="detail-element price">{price}</div>
        <div className="detail-element type">{props.details.type}</div>
        <a className="detail-element maps" href={props.details.maps_url}>
          <img className="maps-icon" src={MapsIcon} alt="Google Maps icon" />
        </a>
      </div>
      <div className="play-again" onClick={props.handleClick}>Pas convaincu? <span role="img" aria-label="Play Again">🔄</span></div>
    </div>
  )
}

Details.propTypes = {
  isRunning: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  details: PropTypes.object
}

export default Details
