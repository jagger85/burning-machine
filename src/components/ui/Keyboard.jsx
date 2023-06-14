import '../../styles/keyboard scss/main.scss'
import '../../styles/Display.scss'
import '../../styles/Keyboard.scss'

function Keyboard(props){

    return(
           
            <div className='InputContainer'>             
            <input   disabled={true} className='red' type='text' 
            value= {props.displayValue} style={{width: "300px" }}>
            </input>            
            <table className='Keys'>
            <tbody >
            <tr >
            <td><button className="kbc-button" onClick={() => press('7')}>7</button></td>
            <td><button className="kbc-button" onClick={() => press('8')}>8</button></td>
            <td><button className="kbc-button" onClick={() => press('9')}>9</button></td>
            </tr>
            <tr>
            <td><button className="kbc-button" onClick={() => press('4')}>4</button></td>
            <td><button className="kbc-button" onClick={() => press('5')}>5</button></td>
            <td><button className="kbc-button" onClick={() => press('6')}>6</button></td>
            </tr>
            <tr>
            <td><button className="kbc-button" onClick={() => press('3')}>3</button></td>
            <td><button className="kbc-button" onClick={() => press('2')}>2</button></td>
            <td><button className="kbc-button" onClick={() => press('1')}>1</button></td>
            </tr>
            <tr>
            <td><button className="kbc-button"onClick={() => props.setDisplayValue('')}>X</button></td>
            <td><button className="kbc-button" onClick={() => press(0)}>0</button></td>
            <td><button className="kbc-button" onClick={() => press('#')}>#</button></td>
            </tr>
            </tbody>
            </table>
            </div> 
    )

    function press(value){
        if(props.isEnabled === true){
        props.setDisplayValue(props.displayValue + value)
        
        } 
    }
}
export default Keyboard;