import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import Login from '../src/pages/Login'
import Register from '../src/pages/Register'
import Profile from '../src/pages/Profile'
import NewHome from '../src/pages/NewHome'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Login/>
                </Route>
                <Route path="/signup">
                    <Register/>
                    
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
                <Route path="/new-home">
                    <NewHome/>
                </Route>               
            </Switch>
        </BrowserRouter>
    )
}
