import { HeaderContainer } from "./styles"
import logoImg from "../../assets/logo_bazuca.png"
import { Timer, Scroll, } from 'phosphor-react'
import { NavLink } from "react-router-dom"


export function Header() {
    return (
        <HeaderContainer>
            <img src={logoImg} alt="" />
            
            <nav>
                <NavLink to="/"  title="Home">
                    <Timer size={24} />
                </NavLink>

                <NavLink to="/history" title="Histórico">
                    <Scroll size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}   