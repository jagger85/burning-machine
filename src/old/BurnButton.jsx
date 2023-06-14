import React from 'react'
import '../../styles/MetalButton.scss'
import Flamy from '../../resources/flamy.png'

function BurnButton() {

  return (
    <button className="metal radial" ><img src={Flamy} width={100} height={120} style={{marginTop:15}}></img></button>
  )
}
export default BurnButton
