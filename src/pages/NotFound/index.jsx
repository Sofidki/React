import './css/style.css';


const NotFound = () => {
    return (
        <div>
            <title>Page Not Found</title>
            <img src="https://i.ibb.co/W6tgcKQ/softcodeon.gif" />
            <h1 className="error-text">Whoops, We can't seem to find the resource you're looking for.</h1>
            <p className="text">Please check that the Web site address is spelled correctly.Or,</p>
        <div className="btn1">
            <a className="error" href="https://softcodeon.com/tutorials/create-custom-404-error-page.htm">Go to Homepage</a>
        </div>
        </div>
    );
}




export default NotFound;