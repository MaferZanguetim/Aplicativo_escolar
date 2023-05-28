import * as React from 'react';
import {Link} from 'react-router-dom'
import "./style.css"
import home from "../../image/home.jpg"
import exit from "../../image/exit.jpg"

const Header = () =>{
    return(
        <div className='nav'>
            <div className='nav-up'>
                <Link className='link' to={'/menu-principal'}><img className='blue'  src={home} alt=''></img></Link>
                <Link className='link' to={'/class'}>Turmas</Link>
                <h1>Nome da Escola</h1>
                <Link className='link' to={'/student-datas'}>Dados dos alunos</Link>
                <Link className='link' to={'/'}><img src={exit} alt=''></img></Link>
            </div>
            <div className='nav-down'>
                <h2>Nossa Escola</h2>
                <Link className='link' to={'/message'}>Recados</Link>
                <Link className='link' to={'/projects'}>Projetos</Link>
                <h2>Calendario Escolar</h2>
            </div>
        </div>
    )
}

export default Header