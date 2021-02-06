import React, { useState, useEffect } from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useHistory } from 'react-router-dom'

import Button from '../../components/Button'

import api from '../../services/api'

import '../Profile/styles.css'

export default function Profile() {
    const [home, getHome] = useState([])

    const history = useHistory()

    const keyStored = localStorage.getItem('key')

    useEffect(() => {
        console.log(keyStored)
        api.get('profile', {
            headers: {
                Authorization: keyStored,
                "Access-Control-Allow-Origin": "*"
            }
        }).then(response => {
            getHome(response.data.home)
            console.log(response.data)
        })
    }, [keyStored])

    function handleLogout() {
        localStorage.clear()

        return history.push("/")
      }

    return (
        <div className="container container-profile">
            <div className="header-profile">
                <h1>Bem-vindo de volta!</h1>
                <div className="menu-profile">
                    <a href="/new-home" style={{ marginRight: 40 }}><button type='submit' className="submit-button btn-home">Nova moradia</button></a>
                    <a href="/" onClick={handleLogout}><ExitToAppIcon fontSize="large" style={{ color: "white" }} /></a>
                </div>
            </div>
            <section className="section-profile-container">
                {home.map((item, index) => {
                    return (
                        <div className="section-profile" id={index}>
                            <h3 className="card-title-profile">{item.title}</h3>
                            <p className="card-address-profile">{item.address}, {item.city} - {item.uf}</p>
                            <p className="card-description-profile">{item.description}</p>
                        </div>
                    )
                })}

            </section>
        </div>
    )
}
