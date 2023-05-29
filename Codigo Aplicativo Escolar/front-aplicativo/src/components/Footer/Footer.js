import * as React from 'react';
import helpers from '../../helpers';
import './Footer.css'

const Footer = ({name}) =>{
    return(
        
        <div className='footer'>
            <button className='button' onClick={() =>helpers.Talk(name)}>Contato</button>
            <h2>Agende um Horário</h2>
            <h2>Sugestão</h2>
        </div>
    )
}

export default Footer