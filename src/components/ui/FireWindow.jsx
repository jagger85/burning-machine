import React from 'react'
import fire from '../../resources/fire.gif'
import '../../styles/FireWindow.scss'

function FireWindow(props) {
    return (
        <div className="rejilla">
            <div className="fondo">
                <img
                    src={fire}
                    className={props.state['fire']}
                    alt="fire burning"
                ></img>
            </div>
        </div>
    )
}

export default FireWindow
