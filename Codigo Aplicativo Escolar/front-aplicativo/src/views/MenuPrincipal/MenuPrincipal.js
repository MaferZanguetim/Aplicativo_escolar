import { Header, Footer, EditButton} from "../../components";
import './style.css'
import mae from '../../image/dia-das-maes.jpg'

const MenuPrincipal = () =>{
    return(
        <div>
            <Header/>
                <div className="back-web">
                    <div className="quadrado">
                        <h1 className="journal-title">Jornal Escolar - 01/05/2023</h1>
                        <img className="mae" src={mae} alt=" "></img>
                        <h3 className="jornal-conteiner">Dia das mães está chegando e nós da escola fulano de tal, estamos preparando uma apresentação mega</h3>
                        <h3 className="jornal-conteiner">especial para celebrar esse dia, não se esqueça de comparecer para deixar ainda mais especial esse dia</h3>
                        <h3 className="jornal-conteiner-ass">Grata 'A direção'</h3>
                        
                        <EditButton/>
                    </div>
                </div>
            <Footer name='Grupao'/>
        </div>
  )
}

export default MenuPrincipal