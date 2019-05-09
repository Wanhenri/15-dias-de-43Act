import React, { Component} from "react";

import "./styles.css";

class SquareCollab extends Component{
        
        handleClick = () => console.log("FOI!!")    


        render(){
            return(
                <button 
                    onClick={ this.handleClick } 
                    className="square-collab">X</button>
            )
        }
}

//const handleClick = texto => () => console.log(texto);
//
// const SquareCollab = () => (
//         <button 
//                 onClick={ handleClick("coiso") } 
//                 className="square-collab">X</button>
// );
// 

export default SquareCollab;
