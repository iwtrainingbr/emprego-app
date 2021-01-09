import React from 'react';
import {Button, TextField} from "@material-ui/core";
import "./style.scss";

export default function Register(props) {
    return (
        <div className={"page-register"}>
            <img src={"/img/emprego-logo-vertical.png"}/>

            <form>
                <TextField label={"Nome"} variant={"outlined"} fullWidth />
                <TextField label={"Email"} variant={"outlined"} fullWidth />
                <TextField label={"Senha"} variant={"outlined"} fullWidth/>

                <Button color="primary" variant={"contained"} fullWidth>
                    Cadastrar
                </Button>

                <Button onClick={() => props.history.push('/login')} color={"primary"} variant={"text"}>
                    Já tenho conta
                </Button>
            </form>
        </div>
    )
}