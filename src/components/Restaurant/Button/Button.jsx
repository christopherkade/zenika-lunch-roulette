import React from 'react'
import PropTypes from 'prop-types';

import iconFork from './fork.svg'
import iconRestart from './restart.svg'

import './Button.css'

function Button(props) {
  const buttonIcon = props.isRunning ? iconFork : iconRestart

  return (
    <button className="button-stop" onClick={props.handleClick}>
      <img className="button-icon" src={buttonIcon} alt="forkIcon" />
    </button>
  )
}

Button.propTypes = {
  isRunning: PropTypes.bool,
  handleClick: PropTypes.func
}

export default Button