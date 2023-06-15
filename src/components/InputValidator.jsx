import { ACTIONS } from './Commands'

export const valida = (value) => {
    //  /^[0-9]*$/        /* valida que sea un numero  */
    //  /^#[0-9]{2,2}#$/  /* valida que sea una cadena que empiece por # y termine con #  */

    switch (true) {
        case /^#[0-9]{2,2}#$/.test(value) && /^#0{1}2{1}#$/.test(value):
            console.log('print')
            return ACTIONS.PRINT

        case /^#[0-9]{2,2}#$/.test(value) && /^#0{1}1{1}#$/.test(value):
            return ACTIONS.QUEMAR

        case /^#[0-9]{2,2}#$/.test(value):
            return ACTIONS.WRONGCODE

        case /^[0-9]*$/.test(value): {
            return ACTIONS.NUMBER
        }

        default:
            return ACTIONS.NUMBER
    }
}
/**
 * @todo Implementar los tipos que faltan
 */
