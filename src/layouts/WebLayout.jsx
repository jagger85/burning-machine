import React from 'react'
import './styles/WebLayout.scss'
import LeftText from '../components/ui/LeftText'
import RightText from '../components/ui/RightText'
import Machine from './Machine'
function WebContainer() {
  return (
    <div className="WebContainer">
    <div className="LeftWall"><LeftText/></div>
    <div className="RightWall"><RightText/></div>
    <div className="Center">
      <Machine/>
    <div className="Footer"></div>
    </div>
  </div>

  )
}

export default WebContainer