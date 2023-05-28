import { Link } from "react-router-dom"
import "./Login.css"
import user from "../../image/logo.jpeg"


const Login = () =>{
    return(
        <div className="fundoLogin">

            <div className="centro">

                <div className="imagemLogin">
                </div>
                <div className="riscoLogin">
                    
                </div>

                <div className="login">
                    <img src={user} alt=""/>
                    <h2 className="title-login"> Login: </h2>
                    <input className="input-login" placeholder="E-mail" type="text" required></input>
                    <h2 className="title-login"> Senha: </h2>
                    <input className="input-login" placeholder="Password" type="password" required></input>
                    <div className="botao-login">
                        <Link className="btn-login" to = '/menu-principal'>Entrar</Link>
                    </div>
                </div>

            </div> 

        </div>
    )
}

export default Login