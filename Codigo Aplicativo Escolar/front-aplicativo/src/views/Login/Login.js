import { Link } from "react-router-dom"


const Login = () =>{
    return(

        <div>
            <div>
                <div>
                    imagem
                </div>
                <div>
                    imagem
                    <h2> Login </h2>
                    <input placeholder="E-mail" type="text" required></input>
                    <h2> Senha </h2>
                    <input  placeholder="Password" type="password" required></input>
                    <Link to = '/menu-principal'>Entrar</Link>
                </div>
            </div>  
        </div>
    )
}

export default Login