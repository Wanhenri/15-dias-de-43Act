import React from "react";
import "./styles.css";

const NextPlayer = ({player, level}) => (  
    <> 
        <p className="next-player" >Próximo jogador: {player}</p>
        <p className="next-player">Nivel: {level} </p>
    </>
);


export default NextPlayer;