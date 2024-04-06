import react from '../assets/react.svg'
import { NavLinks } from './navlink'

export function Header(){

    return (<div className='flex items-center gap-5 py-1'>
    <img src={react} alt="" />
    
    
    <nav className='flex items-center gap-5'>
        <NavLinks href="/eventos"> Eventos </NavLinks>
        <NavLinks href="/participantes" > Paticipantes </NavLinks>
    </nav>
    </div>
    )

}