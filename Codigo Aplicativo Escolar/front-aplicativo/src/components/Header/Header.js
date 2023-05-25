import * as React from 'react';
import {Link} from 'react-router-dom'



const Header = () =>{
    return(
        <div>
            <div>
                <Link to={'/menu-principal'}>icone</Link>
                <Link to={'/class'}>Turmas</Link>
                <h1>Nome da Escola</h1>
                <Link to={'/student-datas'}>Dados dos alunos</Link>
                <Link to={'/'}>icone</Link>
            </div>
            <div>
                <h2>Nossa Escola</h2>
                <Link to={'/message'}>Recados</Link>
                <Link to={'/projects'}>Projetos</Link>
                <h2>Calendario Escolar</h2>
            </div>
        </div>
    )
}

export default Header