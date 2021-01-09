import React from 'react';
import {Route, Switch} from "react-router-dom";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import Profile from "../pages/Profile";
import Tutorial from "../pages/Tutorial";
import Register from "../pages/Register";

export default function Routes (props) {
    return (
        <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/login"} component={Login}/>
            <Route path={"/cadastro"} component={Register}/>
            <Route path={"/admin"} component={Admin}/>
            <Route path={"/tutorial"} component={Tutorial}/>
            <Route path={"/meu-perfil"} component={Profile}/>
            <Route path={"/vagas"} component={Jobs}/>


            <Route path={"/*"} component={NotFound}/>
        </Switch>
    );
}