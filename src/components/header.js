import React, {Component} from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link  } from "react-router-dom";


export default class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <header>
                <Nav>
                <NavItem>
                <NavLink><Link to="/">На главную</Link></NavLink>
                </NavItem>
                <NavItem>
                <NavLink><Link to="/catalog">Каталог</Link></NavLink>
                </NavItem>
                <NavItem>
                <NavLink><Link to={this.Redirect}>Корзина</Link></NavLink>
                </NavItem>
                </Nav>
                <div className='logo'>
                    <img src="Hunter_Logo.png"/>
                </div>
            </header>
        )
    }

    Redirect = () =>{
        let prov = document.cookie.split('; ')
        for(let w = 0; w < prov.length; w++){
            if(prov[w] == "username=Admin"){
                return "/basket"
            }
        }
            return "/login"
    } 
}