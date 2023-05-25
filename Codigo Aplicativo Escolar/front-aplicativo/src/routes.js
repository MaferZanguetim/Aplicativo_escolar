import {Routes as Switch, Route, BrowserRouter} from 'react-router-dom'
import { Class,Login, MenuPrincipal, Messages, Projects, StudentDatas } from "./views";



const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" element ={<Login/>} />
                <Route path = "/menu-principal" element ={<MenuPrincipal/>} />
                <Route path = "/class" element ={<Class/>} />
                <Route path = "/message" element ={<Messages/>} />
                <Route path = "/projects" element ={<Projects/>} />
                <Route path = "/student-data" element ={<StudentDatas/>} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes