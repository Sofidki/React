import '../Header.css';
import logo from '../../../assests/img/logo.jpg'
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';




const Header = () => {
    return (
        <header className="header-movile">
            <img className="logo" src={logo} alt="Logo" />
            <ul className="menu-header">
                <li><Link to="/" className='links'>Sobre nosotros</Link></li>
                <li><Link to="/products" className='links'>Todos los productos</Link></li>
                <li><Link to="/user/registro" target="_self" className='links'>Registro</Link></li>
                <li><Link to="/" className='links'>Contacto</Link></li>
            </ul>
            <SearchForm/>
        </header>
        );
    };

export default Header;