import { HeaderContainer } from "./styles"
import logoImg from "../../assets/logo.svg"
import { Timer, Scroll, } from 'phosphor-react'


export function Header() {
    return (
        <HeaderContainer>
            <img src={logoImg} alt="" />
            
            <nav>
                <a href="#" >
                    <Timer size={24} />
                </a>

                <a href="#">
                    <Scroll size={24} />
                </a>

            </nav>
        </HeaderContainer>
    )
}   