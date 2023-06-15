import React, { useReducer, useState, useEffect } from 'react'
import Logo from '../components/ui/TextLogo'
import Speaker from '../components/ui/Speaker'
import Keyboard from '../components/ui/Keyboard'
import Tickets from '../components/ui/Tickets'
import FireWindow from '../components/ui/FireWindow'
import SwitchLedContainer from './SwitchLedLayout'
import DisplayLayout from './DisplayLayout'
import './styles/Machine.scss'
import { commands, init } from '../components/Commands'
import BurnButton from '../components/ui/BurnButton'
import { valida } from '../components/InputValidator'

function Machine() {
    const [machineState, dispatch] = useReducer(commands, init)
    const [DisplayValue, setDisplayValue] = useState('')

    useEffect(() => {
        if (machineState.estado === 'quemar') {
            setDisplayValue('burn...')
            setTimeout(() => setDisplayValue(''), 15000)
        }

        if (machineState.estado === 'apagar') {
            setDisplayValue('')
        }
    }, [machineState])

    return (
        <div className="Machine">
            <div className="MachineContainer">
                <div className="Header">
                    <Logo />
                </div>
                <div className="FireWindow">
                    <FireWindow state={machineState} />
                </div>
                <div className="Control">
                    <div className="LeftControl"></div>

                    <div className="SwitchLedContainer">
                        <SwitchLedContainer
                            actions={(action) => dispatch(action)}
                            state={machineState}
                        />
                    </div>

                    <div className="DisplayContainer">
                        <DisplayLayout state={machineState} />
                    </div>

                    <div className="Tickets">
                        <Tickets state={machineState} />
                    </div>

                    <div className="Keyboard">
                        <Keyboard
                            isEnabled={machineState['isKeyboardEnabled']}
                            displayValue={DisplayValue}
                            setDisplayValue={setDisplayValue}
                        />
                    </div>

                    <div className="Notes"></div>
                </div>

                <div className="Footer">
                    <div className="FooterLeft"></div>

                    <div className="BurnButton">
                        <BurnButton
                            disabled={machineState['isBotonDisabled']}
                            onClick={(action) => dispatch(valida(DisplayValue))}
                        />
                    </div>
                    <div className="Speaker">
                        <Speaker />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Machine
