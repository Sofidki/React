import './RegistroCard.css'
import React, { useState } from 'react'

function RegistroCard() {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' })
    const [loading, setLoading] = useState(false)
    const handleChangeInput = (e) => {
    console.log(e.target.name, e.target.value)
    setFormState({ ...formState, [e.target.name]: e.target.value });
    };
    const handleSumbit = () => {
    setLoading(true)

    setTimeout(() => {
        setLoading(false)
        alert('Tu usuario ha sido registrado exitosamente')
    }, 2000);
    }
    return (
    <div className='card-container'>
        <h2>Registro</h2>
        <fieldset className='input-container'>
            <label className='input-label'>Usuario</label>
            <input className='input-field' name='username' onChange={(e) => handleChangeInput(e)} />
        </fieldset>
        <fieldset className='input-container'>
            <label className='input-label'>Email</label>
            <input className='input-field' name='email' type='email' onChange={(e) => handleChangeInput(e)} />
        </fieldset>
        <fieldset className='input-container'>
            <label className='input-label'>Contraseña</label>
            <input className='input-field' name='password' type='password' onChange={(e) => handleChangeInput(e)} />
        </fieldset>
        <fieldset className='input-container-checkbox'>
            <input className='input-field' type='checkbox' onChange={(e) => handleChangeInput(e)} />
            <p>Acepto términos y condiciones</p>
        </fieldset>
        <button className='button-register' onClick={() => handleSumbit()}>{loading? 'Registrando' : 'Registrate'}</button>
    </div>
    )
}

export default RegistroCard;