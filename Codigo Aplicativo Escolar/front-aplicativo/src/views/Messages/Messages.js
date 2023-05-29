import React from "react";
import { Header, Footer, EditButton} from "../../components";
import './Message.css'
const Messages = () =>{
    return(
        <div>
            <Header/>
            <div className="back-web">
                <div className="table">
                    <h1 className="center"> Recados Escolares</h1>
                    <div className="card">
                        <h2 className="conteudo">Passeio</h2>
                        <h3 className="data">01/05/2023</h3>
                        <h4 className="conteudo">Na segunda feira dia 01 vamos ao clube e queremos a permissão para que a criança vá.</h4>
                        <button className='menor' >Aceitar</button>                   
                    </div>
                    <EditButton/>
                </div>
            </div>

            <Footer name='Grupao'/>
        </div>
    )
}

export default Messages