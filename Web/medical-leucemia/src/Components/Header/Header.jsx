import '../../Pages/assets/css/Header.css'
import { FaHireAHelper } from "react-icons/fa";
import { Link } from 'react-router-dom';
export const Header = ({cor}) => {
    return (
        <div className='conteiner'>
            <div className='contHeader'>
                <FaHireAHelper />
                {cor === 'cadastro'? <Link className='linkM' to="/">Cadastrar novo paciente</Link> : <Link className='link' to="/">Cadastrar novo paciente</Link>}
                {cor === 'home'? <Link className='linkM' to="/comparar">Comparações</Link> : <Link className='link' to="/comparar">Comparações</Link>}
            </div>
        </div>
    );
}