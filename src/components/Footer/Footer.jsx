import logo from '../../assests/img/logo.jpg'
import './footer.css'

const Footer = () => {
    return (
        <div className="info-contenedor">
            <img className="logo" src={logo} alt="Logo" />
            <div className="info">
                <h4 id="contacto">Contactanos</h4>
                <p>(351) 601-6224</p>
                <p>info@kriptonitagrowshop.com</p>
                <p>Calle siempre viva 123 Belgrano Cordoba Capital</p>
            </div>
        </div>
    );
};

export default Footer;