import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import {API_URL} from "../../config";
import {Button} from "@material-ui/core";

export default function Jobs(props) {
    const [jobData, setJobData] = useState({});
    const id = props.match.params.id;

    const userLogged = JSON.parse(
        localStorage.getItem('user_logged')
    );

    useEffect( () => {
        fetch(API_URL+`/jobs/${id}.json`)
            .then(response => response.json())
            .then(response => {
               setJobData(response);
            });
    }, []);

    const makeMatch = () => {
        jobData.likes = jobData.likes || [];
        jobData.likes.push(userLogged.id);

        fetch(API_URL+`/jobs/${id}.json`, {
            method: 'PUT',
            body: JSON.stringify(jobData)
        })
            .then(response => response.json())
            .then(response => {

            });
    };

    return (
        <Layout
            content={
                <>
                    <h1>{jobData.title}</h1>

                    <hr/>

                    <strong>Jornada: </strong> {jobData.journey}

                    <Button onClick={makeMatch} color="primary" variant={"contained"} fullWidth>
                        Tenho interesse
                    </Button>

                    <Button onClick={() => props.history.push('/')} color={"primary"} variant={"text"}>
                        Voltar
                    </Button>
                </>
            }
        />
    )
}