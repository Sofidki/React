import '../Main/estilo.css'


const Main = () => {
    return ( 
        <div>
        <section className="encabezado">
            <h1 className="titulo">Kriptonita Growshop</h1>
            <p><mark>¡Bienvenidos al mundo del cultivo!</mark> 
            <br /> Si eres nuevo en el mundo del cultivo, ¡estás en el lugar correcto! En nuestro growshop, encontrarás todo lo que necesitas para comenzar a cultivar tus propias plantas en casa. Desde semillas hasta equipos de iluminación, tenemos todo lo que necesitas para comenzar tu propio jardín interior o exterior. </p>
        </section>
        <div className="banner">
            <h3>Cultiva. La tierra es tu madre; el campo es tu sustento; sazonados frutos y óptimas cosechas recogeremos si los cultivamos . No dejes ninguna tierra estéril. Da a la tierra el cuidado que necesita para que te alimente y te haga vivir
            </h3>
            <p>#TelorecomiendoKiptonitaGrow</p>
        </div>
        <section className="nosotros">
        <div>
            <h4 id="nosotros">Sobre nosotros</h4>
            <p>Somos una empresa nueva en el mercado del growshop y estamos comprometidos en ofrecer productos de alta calidad para el cultivo de plantas en casa . Nuestro objetivo es ayudar a nuestros clientes a obtener los mejores resultados en su cultivo, brindando asesoramiento y recomendaciones personalizadas. Estamos comprometidos en ofrecer un servicio excepcional y en mantenernos actualizados con las últimas tendencias y tecnologías en el mercado del growshop</p>
            </div>
        <div className="elergirnos">
            <h2>¿Por qué elegirnos?</h2>
            <ol>
                <li>Nuestro personal está altamente capacitado y siempre está dispuesto a ayudarte con cualquier pregunta que puedas tener. </li>
                <li>Ofrecemos una amplia variedad de productos para satisfacer las necesidades de cualquier cultivador, desde principiantes hasta expertos. </li>
                <li>Te ayudamos a considerar las necesidades específicas de las plantas que se desean cultivar, como la cantidad de luz, agua y nutrientes que requieren.</li>
            </ol>
            <p><i>¡No dudes en visitarnos y comenzar tu viaje en el mundo del cultivo hoy mismo!</i></p>
        </div>
        </section>
        </div>
    );
}
export default Main;