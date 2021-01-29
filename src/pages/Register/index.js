import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

import TextInput from '../../components/TextInput'
import Button from '../../components/Button'

import api from '../../services/api'

import "./styles.css"



function Login() {
    const [name, getName] = useState('');
    const [email, getEmail] = useState('');
    const [whatsapp, getWhats] = useState('');
    const [city, getCity] = useState('');
    const [uf, getUf] = useState('');
    const [key, getKey] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
            key
        };

        try {
            const response = await api.post('users', data);

            alert(`Seu código de acesso é: ${response.data.id}`);

            // history.push('/');

        } catch (err) {
            console.log(err)
            alert('Erro no cadastro, tente novamente.');
        }
    }



    return (
        <div className="container">
            <section>
                <h2 class="title">Cadastro</h2>
                <div className="form">
                    <div className="personal">
                        <TextInput id="name" label="Name" variant="outlined" value={name} onChange={e => getName(e.target.value)} required />
                        <TextInput id="whatsapp" label="Whatsapp" variant="outlined" value={whatsapp} onChange={e => getWhats(e.target.value)} required />
                    </div>
                    <TextInput id="email" label="E-mail" variant="outlined" value={email} onChange={e => getEmail(e.target.value)} required />
                    <div className="address">
                        <TextInput id="city" label="Cidade" variant="outlined" value={city} onChange={e => getCity(e.target.value)} required />
                        <TextInput id="uf" label="UF" variant="outlined" value={uf} onChange={e => getUf(e.target.value)} required />
                    </div>
                    <TextInput id="key" label="Key" variant="outlined" value={key} onChange={e => getKey(e.target.value)} required />
                    <Button type="submit" value="Finalizar" onClick={handleRegister}/>
                </div>
            </section>
        </div>
    )
}

export default Login;
