import { Header, Footer, EditButton} from "../../components";
import './StudentDatas.css'

const StudentDatas = () =>{
    return(
        <div>
            <Header/>
            <div className="back-web">
                <div className="quadrado">
                    <h1 className="data-title">Dados do Aluno</h1>
                    <div className="information">
                        <div className="table-info">
                            <h2 className="title-login"> Nome completo: </h2>
                            <input className="input-login" placeholder="Nome " type="text" required></input>
                            <h2 className="title-login"> Possui Alergia? </h2>
                            <input className="input-login" placeholder="Não? Sim? Quais " type="text" required></input>
                            <h2 className="title-login"> Telefone para contato </h2>
                            <input className="input-login" placeholder="Telefone " type="phone" required></input>
                        </div>
                        <div className="table-info">
                            <h2 className="title-login"> Data de Nascimento: </h2>
                            <input className="input-login" placeholder="Data de nascimento" type="date" required></input>
                            <h2 className="title-login"> Genero </h2>
                            <input className="input-login" placeholder="Gênero " type="text" required></input> 
                            <h2 className="title-login"> Permite o uso de imagens? </h2>
                            <input className="input-login" placeholder="Sim ou não" type="text" required></input> 
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <EditButton/>
                </div>
            </div>
            <Footer name='Grupao'/>
        </div>
    )
}

export default StudentDatas