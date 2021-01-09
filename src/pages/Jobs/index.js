import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";

export default function Jobs(props) {
    const [jobsData, setJobsData] = useState([]);

    useEffect( () => {
        fetch('https://emprego-iwtraining.firebaseio.com/jobs.json')
            .then(response => response.json())
            .then(response => {
               let data = [];

               for(let id in response) {
                   data.push(response[id]);
               }

               setJobsData(data);
            });
    }, []);

    return (
        <Layout
            content={
                <>
                    <h1>Página de Vagas</h1>

                    <table width="100%" border="1">
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Requisitos</th>
                                <th>Postada em</th>
                            </tr>
                        </thead>
                        <tbody>
                        {jobsData.map(job => {
                            return (
                                <tr>
                                    <td>{job.title}</td>
                                    <td>{job.requirements}</td>
                                    <td>{job.date}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </>
            }
        />
    )
}