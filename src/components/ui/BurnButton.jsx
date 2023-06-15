import React from 'react'
import '../../styles/MetalButton.scss'
import Flamy from '../../resources/flamy.png'

const BurnButton = ({ children, onClick, disabled }) => {
    return (
        <button disabled={disabled} onClick={onClick} className="metal radial">
            <img
                src={Flamy}
                width={100}
                height={120}
                style={{ marginTop: 15 }}
                alt="flammy logo"
            />
            {children}
        </button>
    )
}

export default BurnButton
