import {useState} from 'react'
import PropTypes from 'prop-types'

export default function FeedbackStats({feedback}) {

    // Calculate ratings average
    const avg = (feedback.reduce((acc, curr) => {
        return acc + curr.rating
    }, 0) / feedback.length).toFixed(1).replace(/[.,]0$/,'');

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(avg) ? '0' : avg}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}