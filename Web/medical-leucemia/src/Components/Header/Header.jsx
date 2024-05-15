import '../../Pages/assets/css/Header.css'
import { FaHireAHelper } from "react-icons/fa";
export const Header = () => {
    return (
        <div className='conteiner'>
            <div className='contHeader'>
                <FaHireAHelper />
                <a>Cadastrar novo paciente</a>
                <a>Mostrar Pacientes</a>
            </div>
        </div>
    );
}