import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import TextInput from '../../components/TextInput'
import Button from '../../components/Button'

import api from '../../services/api'

import './styles.css'

function NewHome() {
    const [city, getCity] = useState('');
    const [uf, getUf] = useState('');
    const [address, getAddress] = useState('');
    const [description, getDescription] = useState('');
    const [title, getTitle] = useState('')

    const history = useHistory();

    async function handleRegisterHome(e) {
        e.preventDefault();

        const keyStored = localStorage.getItem('key');

        const data = {
            city,
            uf,
            address,
            description,
            title
        };

        

        try {
            await api.post('home', data, {
                headers: {
                    Authorization: keyStored
                }
            });

            history.push('/');

        } catch (err) {
            console.log(err)
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="container">
            <section className="section">
                <h2 class="title">Cadastrar moradia</h2>
                <div className="form">
                    <TextInput id="title" label="Título" variant="outlined" value={title} onChange={e => getTitle(e.target.value)} required />
                    <TextInput id="address" label="Endereço" variant="outlined" value={address} onChange={e => getAddress(e.target.value)} required />
                    <div>
                        <TextInput id="city" label="Cidade" variant="outlined" value={city} onChange={e => getCity(e.target.value)} required />
                        <TextInput id="uf" label="UF" variant="outlined" value={uf} onChange={e => getUf(e.target.value)} required />
                    </div>                    
                    <TextInput id="description" label="Descrição" variant="outlined" value={uf} onChange={e => getDescription(e.target.value)} required />
                    <Button type="submit" value="Cadastrar" onClick={handleRegisterHome} />
                </div>
            </section>
        </div>
    )
}

export default NewHome
