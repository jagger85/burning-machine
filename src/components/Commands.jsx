import { getTotalBurned, getNftGen, getNftMinted } from './NetworkService'

export const ACTIONS = {
    REPOSO: 'reposo',
    ENCENDER: 'encender',
    APAGAR: 'apagar',
    QUEMAR: 'quemar',
    PRINT: 'print',
    WRONGCODE: 'wrongcode',
    NUMBER: 'number',
}

export const init = {
    /* Estado inicial */
    greenled: 'led-green-off',
    orangeled: 'led-yellow-off',
    redled: 'led-red-off',
    fire: 'fire-off',
    isBotonDisabled: true,
    isKeyboardEnabled: false,
    printer: 'Ticket-off',
}

export const commands = (state, action) => {
    switch (action) {
        case ACTIONS.ENCENDER:
            return {
                ...state,
                greenled: 'led-green-on',
                orangeled: 'led-yellow-off',
                redled: 'led-red-off',
                TotalBurnedDisplay: getTotalBurned(),
                TotalNftDisplay: getNftMinted(),
                GenDisplay: getNftGen(),
                fire: 'fire-off',
                isBotonDisabled: false,
                isKeyboardEnabled: true,
                estado: ACTIONS.ENCENDER,
            }

        case ACTIONS.APAGAR:
            return {
                ...state,
                greenled: 'led-green-off',
                orangeled: 'led-yellow-off',
                redled: 'led-red-off',
                TotalBurnedDisplay: '',
                TotalNftDisplay: '',
                GenDisplay: '',
                fire: 'fire-off',
                boton: 'false',
                isKeyboardEnabled: false,
                printer: 'Ticket-off',
                isBotonDisabled: true,
                estado: ACTIONS.APAGAR,
            }

        case ACTIONS.QUEMAR:
            return {
                ...state,
                orangeled: 'yellow-led-blink',
                fire: 'fire-on',
                estado: ACTIONS.QUEMAR,
            }

        case ACTIONS.PRINT:
            return {
                ...state,
                printer: 'Ticket-on',
                estado: ACTIONS.PRINT,
            }

        case ACTIONS.NUMBER:
            return {
                ...state,
            }

        case ACTIONS.WRONGCODE:
            return {
                ...state,
            }

        default:
            console.log(action + ' Not supported')
    }
}
