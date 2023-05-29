import { Header, Footer, EditButton} from "../../components";
import './Projects.css'

const Projects = () =>{
    return(
        <div>
            <Header/>
            
            <div className="back-web">
                <div className="table">
                    <h1 className="center"> Projetos Escolares</h1>
                    <div className="card-pascoa">
                        <h2 className="card-title">Pascoa</h2>
                    </div>
                    <EditButton/>
                </div>
            </div>

            <Footer name='Grupao'/>
        </div>
    )
}

export default Projects