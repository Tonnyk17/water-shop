import React, { useState } from "react";
import { TitleText } from "../../atoms/Text/TitleText/TitleText";
import './Form.css';

export const Form = () => {
    const [contactData, setContactData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })
    const handleChange = (e) => {
        setContactData({
            ...contactData,
            [e.target.name]: e.target.value
        })
    }
    return(
        <>
            <div className="form-container">
                <TitleText content={'Contacto'}/>
                <form  
                    className="form" 
                    action={`
                        mailto:tonykurosaki117@gmail.com?subject=Contacto&body=
                        Nombre%3A${contactData.name}%0A
                        Telefono%3A${contactData.phone}%0A
                        Correo%3A${contactData.email}%0A
                        Mensaje%3A${contactData.message}
                    `}
                    method="post"
                >
                    <label htmlFor="name">
                        Nombre completo
                    </label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name"
                        className="input"
                        placeholder="Elliot Alderson"
                        required
                        onChange={handleChange}
                    />
                    <label htmlFor="phone">
                        Telefono
                    </label>
                    <input 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        className="input"
                        placeholder="5555555555"
                        required
                        onChange={handleChange}
                    />
                    <label htmlFor="email">
                        Correo electronico
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className="input"
                        placeholder="correo@correo.com"
                        required
                        onChange={handleChange}
                    />
                    <label htmlFor="message">
                        Dejanos un mensaje
                    </label>
                    <textarea 
                        name="message" 
                        id="message" 
                        cols="30" 
                        rows="10" 
                        placeholder="Escribe un mensaje..."
                        className="input"
                        onChange={handleChange}
                    />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    )
}