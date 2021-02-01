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
        api.get('profile', {
            headers: {
                Authorization: keyStored
            }
        }).then(response => {
            getHome(response.data.home)
        })
    }, [keyStored])

    function handleLogout() {
        localStorage.clear()

        return history.push("/new-home")
      }

    return (
        <div className="container container-profile">
            <div className="header-profile">
                <h1>Buenos dias</h1>
                <div className="menu-profile">
                    <Button type="submit" value="Meus critérios" className="btn-evaluate" />
                    <Button type="submit" value="Nova moradia" className="btn-home" onClick={handleLogout}/>
                    <a href="/"><ExitToAppIcon fontSize="large" style={{ color: "white" }} /></a>
                </div>
            </div>
            <section className="section-profile-container">
                {home.map((item, index) => {
                    return (
                        <div className="section section-profile" id={index}>
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
