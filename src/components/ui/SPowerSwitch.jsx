import '../../styles/SPowerSwitch.scss'
import { useState } from 'react'
import { ACTIONS } from '../Commands'
function SPowerSwitch(props) {
    const [isChecked, setIsChecked] = useState(false)

    const toggleSwitch = () => {
        setIsChecked(!isChecked)

        if (isChecked) {
            console.log('apagar')
            return props.actions(ACTIONS.APAGAR)
        } else {
            console.log('Encender')
            return props.actions(ACTIONS.ENCENDER)
        }
    }

    return (
        <div className="switch" onClick={toggleSwitch}>
            <input type="checkbox" checked={isChecked} />
            <div className="button">
                <div className="light"></div>
                <div className="dots"></div>
                <div className="characters"></div>
                <div className="shine"></div>
                <div className="shadow"></div>
            </div>
        </div>
    )
}

export default SPowerSwitch
