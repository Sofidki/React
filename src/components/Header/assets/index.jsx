import '../productos.css';
import logo from '../../../assests/img/logo.jpg'
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';




const Header = () => {
    return (
        <header className="header-movile">
            <img className="logo" src={logo} alt="Logo" />
            <nav className="menú">
                <ul>
                    <li><Link to="/">Sobre nosotros</Link></li>
                    <li><Link to="/products">Todos los productos</Link></li>
                    <li><Link to="/registro" target="_self">Registro</Link></li>
                    <li><Link to="/">Contacto</Link></li>
                </ul>
            </nav>
            <button className="open-menu" id="open-menu">
                <i className="bi bi-x" />
            </button>
            <SearchForm/>
        </header>
        );
    };

export default Header;