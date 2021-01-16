import React from 'react';
import {Button, TextField} from "@material-ui/core";
import "./style.scss";
import {API_URL} from "../../config";

export default function Register(props) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const createUser = () => {
        let data = {
            name: name,
            email: email,
            password: password,
            type: 'Worker'
        };

        fetch(API_URL+"/users.json", {
            method: "POST",
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                data.id = response.name;
                localStorage.setItem('user_logged', JSON.stringify(data));
                props.history.push('/');
            })
    }



    return (
        <div className={"page-register"}>
            <img src={"/img/emprego-logo-vertical.png"}/>

            <form>
                <TextField onChange={event => setName(event.target.value)} value={name} label={"Nome"} variant={"outlined"} fullWidth />
                <TextField onChange={event => setEmail(event.target.value)} value={email} label={"Email"} variant={"outlined"} fullWidth />
                <TextField onChange={event => setPassword(event.target.value)} value={password} label={"Senha"} variant={"outlined"} type={"password"} fullWidth/>

                <Button onClick={createUser} color="primary" variant={"contained"} fullWidth>
                    Cadastrar
                </Button>

                <Button onClick={() => props.history.push('/login')} color={"primary"} variant={"text"}>
                    Já tenho conta
                </Button>
            </form>
        </div>
    )
}