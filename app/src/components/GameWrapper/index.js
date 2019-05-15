import React, { Component } from "react";

import NextPlayer from "../NextPlayer";
import BoardCollab from "../BoardCollab";

import HistoryCollab from "../HistoryCollab";

import "./styles.css";




class GameWrapper extends Component {
    state = {
        player: "X", 
        squares: Array(9).fill(""), 
        level: 10
    };

    handleClick = () => {
        this.setState({player: this.state.player === "X" ? "O" : "X"})

    }
    render(){
        const {player, squares, level} = this.state;

        return (
            <main className="game-wrapper">
                <NextPlayer player={player} level={level} />
                <BoardCollab squares={squares} onClick={this.handleClick} />  
                <HistoryCollab />          
            </main>
        )
    }
}

export default GameWrapper;