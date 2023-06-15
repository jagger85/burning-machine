import React from 'react'
import './styles/SwitchLedLayout.scss'
import SPowerSwitch from '../components/ui/SPowerSwitch'
import '../styles/Leds.scss'

function SwitchLedContainer(props) {
    return (
        <div className="container">
            <div className="Switch">
                <SPowerSwitch actions={props.actions} />
            </div>
            <div className="Leds">
                <div className="GreenLed">
                    <div className="led-box">
                        <div className={props.state['greenled']}></div>
                    </div>
                </div>
                <div className="OrangeLed">
                    <div className="led-box">
                        <div className={props.state['orangeled']}></div>
                    </div>
                </div>
                <div className="RedLed">
                    <div className="led-box">
                        <div className={props.state['redled']}></div>
                    </div>
                </div>
                <div className="GreenText">Conected</div>
                <div className="OrangeText">Burning</div>
                <div className="RedText">Error</div>
            </div>
        </div>
    )
}

export default SwitchLedContainer
