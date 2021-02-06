import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

import Button from '../../components/Button'

import api from '../../services/api'

import "./styles.css"

function Register() {
    const [name, getName] = useState('');
    const [email, getEmail] = useState('');
    const [whatsapp, getWhats] = useState('');
    const [city, getCity] = useState('');
    const [uf, getUf] = useState('');
    const [cep, getCEP] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
            const response = await api.post('users', data, {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            });

            alert(`Seu código de acesso é: ${response.data.id}`);

            history.push('/');

        } catch (err) {
            console.log(err)
            alert('Erro no cadastro, tente novamente.');
        }
    }

    async function pesquisarCep(value) {
        const data = await fetch(`https://viacep.com.br/ws/${value}/json/`).then(res => res.json());
        getCity(data.localidade);
        getUf(data.uf);
    }

    return (
        <div className="container">
            <section className="section-register">
                <h2 className="title" style={{ alignSelf: 'center', marginBottom: 40 }}>Cadastro</h2>
                <input className="input-register" autoComplete="off" type="text" id="name" placeholder="Nome" value={name} onChange={e => getName(e.target.value)} required maxLength="255" />
                <input className="input-register"  autoComplete="off" type="tel" id="whatsapp" placeholder="Whatsapp" value={whatsapp} onChange={e => getWhats(e.target.value)} required maxLength="11" />
                <input className="input-register"  autoComplete="off" type="email" id="email" placeholder="E-mail" value={email} onChange={e => getEmail(e.target.value)} required maxLength="255" />
                <input className="input-register"  autoComplete="off" type="text" id="cep" placeholder="CEP" value={cep} maxLength="8" onChange={function (e) {
                    getCEP(e.target.value)
                    const size = e.target.value.length;
                    if (size === 8) {
                        pesquisarCep(e.target.value);
                    }
                }} required />
                <div style={{ display: 'flex' }}>
                    <input className="mgRight"  autoComplete="off" style={{ flex: 1 }} type="text" id="city" placeholder="Cidade" value={city} required disabled maxLength="255" />
                    <input type="text" id="uf"  autoComplete="off" placeholder="UF" value={uf} required disabled maxLength="2" />
                </div>
                <button type="submit" className="submit-button" onClick={handleRegister} >Finalizar</button>
            </section>
        </div>
    )
}

export default Register;
