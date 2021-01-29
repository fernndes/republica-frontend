import React from 'react';

import TextInput from '../../components/TextInput'
import Button from '../../components/Button'

import "./styles.css"

function Login() {
    return (
        <div className="container">
            <section>
                <h2 class="title">Entre com o seu código de acesso</h2>

                <form className="form" noValidate autoComplete="off">
                    <TextInput id="outlined-basic" label="Código de acesso" variant="outlined" />
                    <Button type="submit" value="Acessar"/>
                </form>
                <div className="signup">
                    <a href="#">
                        Ainda não possui um código? <span>Cadastre-se</span>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Login;
