import React from 'react';
import {Button, TextField} from "@material-ui/core";
import "./style.scss";

export default function Login(props) {
    return (
        <div className={"page-login"}>
            <img src={"/img/emprego-logo-vertical.png"}/>

            <form onSubmit={() => props.history.push('/')}>
                <TextField label={"Email"} variant={"outlined"} fullWidth />
                <TextField label={"Senha"} variant={"outlined"} fullWidth/>

                <Button type={"submit"} color="primary" variant={"contained"} fullWidth>
                    Entrar
                </Button>

                <Button onClick={() => props.history.push('/cadastro')} color={"primary"} variant={"text"}>
                    Não tenho conta
                </Button>
            </form>
        </div>
    )
}