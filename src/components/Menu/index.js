import React from 'react'
import Logo from '../../assets/img/Logo.png'
import { Link } from 'react-router-dom' 
import './Menu.css'
import Button from '../Button'
//import ButtonLink from './components/ButtonLink'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo da AluraFlix" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu