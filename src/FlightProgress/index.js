import React from 'react';
import { ProgressBar } from 'react-bootstrap/ProgressBar';
import Clock from 'react-live-clock'

const FlightProgress = (props) => {
  console.log(props.scheduledTime)
    return(
      <div>
        <div className="text-center">
          <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
        </div>
      </div>
    )
}

export default FlightProgress
