import { Header, Footer, EditButton } from "../../components";
import './style.css'

const Class = () =>{
    return(
        <div>
            <Header/>
            <div className="back-web">
                <div className="table">
                    <table className="tabela">
                       <tr>
                            <th>Sala</th>
                            <th>Professor</th>
                            <th>Nº Alunos</th>
                            <th>Monitor</th>    
                       </tr>
                       <tr>
                            <td>1° ano</td>
                            <td>Helena</td>
                            <td>30 Alunos</td>
                            <td>Mariana</td>    
                       </tr>
                       <tr>
                            <td>2° ano</td>
                            <td>Jéssica</td>
                            <td>28 Alunos</td>
                            <td>Ana</td>    
                       </tr>
                       <tr>
                            <td>3° ano</td>
                            <td>Laura</td>
                            <td>26 Alunos</td>
                            <td>Joana</td>    
                       </tr>
                       <tr>
                            <td>4° ano</td>
                            <td>Fernanda</td>
                            <td>20 Alunos</td>
                            <td>Luana</td>    
                       </tr>
                       <tr>
                            <td>5° ano</td>
                            <td>Maria</td>
                            <td>20 Alunos</td>
                            <td>Juliana</td>    
                       </tr>
                       
                       
                    </table>
                    <EditButton/>
                </div>
            </div>

            <Footer name='Grupao'/>
        </div>
    )
}

export default Class