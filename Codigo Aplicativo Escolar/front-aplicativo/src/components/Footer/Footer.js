import * as React from 'react';
import helpers from '../../helpers';

const Footer = ({name}) =>{
    return(
        <div>
            <button onClick={() =>helpers.Talk(name)}>Fale Conosco</button>
            <h2>Equipe</h2>
            <h2>Sugestão</h2>
        </div>
    )
}

export default Footer