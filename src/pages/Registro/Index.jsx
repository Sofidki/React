import './registro.css'

const Registro = () => {
    return ( 
        <div className="wrapper">
            <div className="form-box Login">
                <h2>Login</h2>
                <form action="#" id="form">
                    <div className="input-box">
                        <span className="icon">
                        <ion-icon name="mail-outline" />
                        </span>
                        <input type="email" id="email" required />
                        <label htmlFor>Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon">
                        <ion-icon name="lock-closed-outline" />
                        </span>
                        <input type="password" id="password" required />
                        <label htmlFor>Password</label>
                    </div>
                    <div className="remmember-forgot">
                        <label htmlFor><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot Password</a>
                    </div>
                    <button type className="btn">Login</button>
                    <div className="login-register">
                        <p>Don`t have an account? <a href="#" className="register-link">Register</a></p>
                    </div>
                </form>
            </div>
            <div className="form-box Register">
                <h2>Register</h2>
                <form action="#" method="post" id="form">
                    <div className="input-box">
                    <span className="icon">
                        <ion-icon name="person-outline" />
                    </span>
                    <input type="text" id="usuario" required />
                    <label htmlFor>Username</label>
                    </div>
                    <div className="input-box">
                    <span className="icon">
                        <ion-icon name="mail-outline" />
                    </span>
                    <input type="email" id="email" required />
                    <label htmlFor>Email</label>
                    </div>
                    <div className="input-box">
                    <span className="icon">
                        <ion-icon name="lock-closed-outline" />
                    </span>
                    <input type="password" id="password" required />
                    <label htmlFor>Password</label>
                    </div>
                    <div className="remmember-forgot">
                    <label htmlFor><input type="checkbox" />I agree to the terms &amp; conditions</label>
                    </div>
                    <button type="submit" id="button" className="btn">Register</button>
                    <div className="login-register">
                    <p>Already have an account? <a href="#" className="login-link">Login</a></p>
                    </div>
                </form>
            </div>
        </div>

    );
}


export default Registro;