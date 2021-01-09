import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout";
import "./styles.scss";
import {Badge, Card, CardActionArea, CardContent, Chip, Divider, Grid} from "@material-ui/core";
import {API_URL} from "../../config";

export default function Home(props) {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(API_URL+"/jobs.json")
            .then(response => response.json())
            .then(response => {
                let data = [];

                for (let id in response) {
                    response[id].id = id;
                    data.push(response[id]);
                }

                setJobs(data);
            });
    }, []);

    return (
        <Layout
            content={
                <div className={"page-home"}>
                    <h1>Vagas disponíveis</h1>

                    <Divider/>

                    {jobs.map(job => {
                        return (
                            <Card elevation={3} style={{marginTop: 10}}>
                                <CardActionArea onClick={() => props.history.push('/vagas/'+job.id)}>
                                    <CardContent>
                                        <Grid container spacing={0}>
                                            <Grid item xs={12}>
                                                <h2>{job.title}</h2>
                                            </Grid>

                                            <Grid item xs={11}>
                                                <Chip label={job.contract_type}/>
                                                <Chip label={job.remote?"Remoto":"Presencial"}/>
                                                <Chip label={"R$ "+job.salary_min + "~" + job.salary_max}/>
                                            </Grid>
                                            <Grid item xs={1}>
                                                <div style={{textAlign: "center"}}>
                                                    90%
                                                </div>
                                            </Grid>
                                        </Grid>

                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        )
                    })}

                </div>
            }
        />
    )
}