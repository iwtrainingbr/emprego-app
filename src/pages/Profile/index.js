import React from "react";
import Layout from "../../components/Layout";
import {Button, TextField} from "@material-ui/core";
import {API_URL} from "../../config";
import "./style.scss";

export default function Profile(props) {
    const userLogged = JSON.parse(
        localStorage.getItem('user_logged')
    );

    const [userData, setUserData] = React.useState({
        name: userLogged.name,
        email: userLogged.email,
        password: userLogged.password,
        title: '',
        description: '',
        skills: '',
        salary_min: 0,
        salary_max: 0,
        year_experience: 0,
        formation: '',
        contract_type: '',
        journey: '',
    });

    const updateUser = () => {
        fetch(API_URL+`/users/${userLogged.id}.json`, {
            method: 'PUT',
            body: JSON.stringify(userData),
        })
            .then(response => response.json())
            .then(response => {
                localStorage.setItem('user_logged', JSON.stringify(userLogged));
            });
    };

    const handleChange = (event) => {
        let value = event.target.value;
        let field = event.target.id;

        setUserData({...userData, [field]: value});
    };

    return (
        <Layout
            content={
                <div className={"page-profile"}>
                    <form>
                        <TextField onChange={handleChange} value={userData.name} id={"name"} label={"Nome"} variant={"outlined"} fullWidth />
                        <TextField onChange={handleChange} value={userData.email} id={"email"} label={"Email"} variant={"outlined"} fullWidth />
                        <TextField onChange={handleChange} value={userData.title} id={"title"} label={"Título"} variant={"outlined"} fullWidth />
                        <TextField onChange={handleChange} value={userData.description} id={"description"} label={"Descricão"} variant={"outlined"} fullWidth />

                        <Button onClick={updateUser} color="primary" variant={"contained"} fullWidth>
                            Cadastrar
                        </Button>
                    </form>
                </div>
            }
        />
    )
}