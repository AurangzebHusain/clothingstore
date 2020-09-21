import React from 'react'
import '../header/header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <div className="header">
            <Link to ="/"> <Logo classname='logo'/></Link>
            <div className="options">
                    <Link className="option" to="/shop">SHOP</Link>
                    <Link className="option" to="/contact">CONTACT</Link>
                    <Link className="option" to="/signin">SIGNIN</Link>
                
            </div>
            
        </div>
    )
}
