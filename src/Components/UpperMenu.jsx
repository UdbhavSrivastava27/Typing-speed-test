import React from 'react'
import { useTestMode } from '../Context/TestModeContext'

const UpperMenu = ({countDown}) => {

    const {setTestTime} = useTestMode()

    const updateTime = (e)=>{
        setTestTime(e.target.id)

    } 


  return (
    <div className='upper-menu'>
        <div className="counter">
        {countDown}
        </div>
        <div className="modes">
            <div className="time-mode" id={20} onClick={updateTime}>20s</div>
            <div className="time-mode" id={40} onClick={updateTime}>40s</div>
            <div className="time-mode" id={80} onClick={updateTime}>80s</div>
        </div>
    </div>
  )
}

export default UpperMenu