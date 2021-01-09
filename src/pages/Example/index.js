import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Example () {
    let nome = 'Alessandro';
    const [numero, setNumero] = React.useState(0);

    function diminuirNumero () {
        setNumero(numero - 1);
    }

    function aumentarNumero () {
        setNumero(numero + 1);
    }

    return (
        <h1>
            Olá mundo, eu me chamo {nome}

            <br/>

            <button onClick={diminuirNumero} className={"btn btn-secondary"}>Remover 1</button>

            <span>{numero}</span>

            <button onClick={aumentarNumero}  className={"btn btn-primary"}>Adicionar 1</button>
        </h1>
    );
}