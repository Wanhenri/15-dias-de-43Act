import React from "react";

import SquareCollab from "../SquareCollab";

import "./styles.css";

const createSquares = () => {
    const squares = Array(9).fill();

    // const newSquares = squares.map(function(square, index){
    //     return <SquareCollab key={index} />
    // });
    // return newSquares;

    // console.log("valor: ", squares);

    return squares.map((square, index) => <SquareCollab key={index} />)
}

const BoardCollab = () => (
    <article className="board-collab">
        {createSquares()}
    </article>

);

export default BoardCollab;