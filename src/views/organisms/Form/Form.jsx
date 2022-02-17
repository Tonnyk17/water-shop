import React from "react";
import { TitleText } from "../../atoms/Text/TitleText/TitleText";
import './Form.css';

export const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    }
    return(
        <>
            <div className="form-container">
                <TitleText content={'Contacto'}/>
                <form  className="form" onSubmit={handleSubmit}>
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
                    />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    )
}