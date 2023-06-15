import React from 'react'
import '../../styles/Tickets.scss'

function Tickets(props) {
    return (
        <div className="TicketContainer">
            <div className="TicketHole">
                <div className={props.state['printer']}></div>
            </div>
        </div>
    )
}

export default Tickets
