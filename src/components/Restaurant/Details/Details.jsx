import React from 'react'
import PropTypes from 'prop-types'

import MapsIcon from './google.svg'

import './Details.css'

function Details(props) {
    const price = Array(parseInt(props.details.price)).fill('💰')

    return (
        <div className="details-wrapper">
            <div className="detail-element price">{price}</div>
            <div className="detail-element type">{props.details.type}</div>
            <a className="detail-element maps" href={props.details.maps_url}>
                <img className="maps-icon" src={MapsIcon} alt="google maps icon" />
            </a>
        </div>
    )
}

Details.propsType = {
    details: PropTypes.shape({
        type: PropTypes.string,
        price: PropTypes.number,
        maps_url: PropTypes.string
    })
}

export default Details