import React from 'react'
import './styles/DisplayLayout.scss'
import '../styles/Display.scss'



function DisplayLayout(props) {
  return (
    
    <div className="Displays">
    <div className="TotalBurnedText">Total burned $Lunc</div>
    <div className="TotalBurnedDisplay">
    <input disabled={true} 
    className='red' type='text'
    value={props.state['TotalBurnedDisplay']} 
    style ={{width:300}}/>
    </div>

    <div className="BottomDisplay">
    <div className="TotalNftMintedText">Nft´s minted</div>
    <div className="TotalNftDisplay">
    <input disabled={true} 
    className='red' type='text' value={props.state['TotalNftDisplay']} 
    style={{width:190}}/></div>
    
    <div className="GenText">Gen</div>
    <div className="GenDisplay"><input disabled={true} 
    className='red' type='text' value={props.state['GenDisplay']}
    style={{width: "50px",marginLeft:'25px'}}/>
    </div>
    </div>
    </div>
  )
}

export default DisplayLayout