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
    const [title, getTitle] = useState('');
    const [cep, getCEP] = useState('');

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
            console.log(keyStored)
            await api.post('home', data, {
                headers: {
                    Authorization: keyStored,
                    "Access-Control-Allow-Origin": "*"
                }
            }).then((res) => console.log(res));

            history.push('/profile');

        } catch (err) {
            console.log(err)
            alert('Erro no cadastro, tente novamente.');
        }
    }

    async function pesquisarCep(value) {
        const data = await fetch(`https://viacep.com.br/ws/${value}/json/`).then(res => res.json());
        getCity(data.localidade);
        getAddress(data.logradouro);
        getUf(data.uf);
    }

    return (
        <div className="container">
            <section className="section-new-home">
                <h2 className="title" style={{ alignSelf: 'center', marginBottom: 40 }}>Cadastrar moradia</h2>
                <input maxLength="100" autoComplete="off" className="input-new-home" id="title" placeholder="Título" value={title} onChange={e => getTitle(e.target.value)} required />
                <input maxLength="8" autoComplete="off" className="input-new-home" type="text" id="cep" placeholder="CEP" value={cep} onChange={function (e) {
                    getCEP(e.target.value)
                    const size = e.target.value.length;
                    if (size === 8) {
                        pesquisarCep(e.target.value);
                    }
                }} required />
                <input autoComplete="off" className="input-new-home" id="address" placeholder="Endereço" value={address} onChange={e => getAddress(e.target.value)} required disabled/>
                <div style={{ display: 'flex', marginBottom: 10 }}>                    
                    <input autoComplete="off" className="mgRight" style={{ flex: 1 }} type="text" id="city" placeholder="Cidade" value={city} required disabled />
                    <input type="text" id="uf" placeholder="UF" value={uf} required disabled />
                </div>
                <input maxLength="520" autoComplete="off" className="input-new-home" id="description" placeholder="Descrição" value={description} onChange={e => getDescription(e.target.value)} required />
                <Button type="submit" value="Cadastrar" onClick={handleRegisterHome} />
            </section>
        </div>
    )
}

export default NewHome
