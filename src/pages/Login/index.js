import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

import TextInput from '../../components/TextInput'
import Button from '../../components/Button'

import api from '../../services/api'

import "./styles.css"

function Login() {
    const [key, setKey] = useState('')
    const history = useHistory()

    async function handleLogin(e){
        e.preventDefault()

        try {
            await api.post('sessions', { key }, { 
                headers: {
                "Access-Control-Allow-Origin": "*"
                }
             }).then((res) => console.log(res));

            localStorage.setItem('key', key)

            history.push('/profile')
        } catch (error) {
            alert('Falha no Login, tente novamente.')
        }
    }
    return (
        <div className="container">
            <section className="section-login">
                <h2 className="title-login">Entre com o seu código de acesso</h2>
                <TextInput type="text" id="key" label="Código de acesso" value={key} onChange={e => setKey(e.target.value)} required/>
                <Button type="submit" value="Acessar" onClick={handleLogin}/>          
                <div className="signup">
                    <a href="/signup">
                        Ainda não possui um código? <span>Cadastre-se</span>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Login;
