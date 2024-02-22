import { useState } from "react";
import React from "react";
import './index.css'


function Home(){
    const [numeroAleatorio, setNumeroAleatorio] = useState(0);

    function gerarNumero(){
        const novoNumero = Math.floor(Math.random() * (100-1) + 1)
        setNumeroAleatorio(novoNumero)
    }
    
    return(
        <div className="conteudo-centralizado">
            <h3>Gerador de Numero Aleatorio</h3>
            <h1>{numeroAleatorio}</h1>

            <div className="area-botao">
                <label>
                    Clique no botao para gerar um numero aleatorio
                </label>
                <button onClick={gerarNumero}>
                    Gerar Numero
                </button>
            </div>
        </div>
    );
}


export default Home;