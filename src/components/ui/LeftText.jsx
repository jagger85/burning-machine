import React from 'react';
import '../../styles/Wall.scss';

function LeftText() {
  return (
    <div className='Wall'>
        <div className='WallText' style={{fontSize:90,marginTop:20,}}>Switch it on!</div>
        <div className='WallText'>This is an experimental technology</div>
        <div className='WallText'>Use at your own risk</div>
        <div className='WallText ncinco'style={{fontSize:60,marginTop:30,marginLeft:200}}>Enjoy!</div>
        <div className='WallText'></div>
        <div className='WallText'></div>
        <div className='WallText'></div>    
    </div>
  )
}

export default LeftText