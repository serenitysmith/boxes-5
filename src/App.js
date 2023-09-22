
import './App.css';

import React, {useState} from "react"
import boxes from "./boxes"
import Box from "./Box"



export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    // toggle function below calls the set squares, our state setter function 
    function toggle(id) {
        setSquares(prevSquares => {

          // // getting rid of below code which uses a typicla for loojujp

    //         const newSquares = []
    //         for(let i = 0; i < prevSquares.length; i++) {
    //             const currentSquare = prevSquares[i]
    //             if(currentSquare.id === id) {
    //                 const updatedSquare = {
    //                     ...currentSquare,
    //                     on: !currentSquare.on
    //                 }
    //                 newSquares.push(updatedSquare)
    //             } else {
    //                 newSquares.push(currentSquare)
    //             }
    //         }
    //         return newSquares
    //     })

    // //// we replace it wiht a for loop which does the same thing


    // new . mAP below

    // below uses the call back function setSquares because we  want to know what the previous array looked like so useing .map maps over the old array and returns a new aray without modifying the origanl  array and keeping it the same length.. ie looping over it 

    // below functon checks if id matches, toggle funtion, if it does, then it means that the square was clicked, if thats true we repalce the old object with a new objwct  
return prevSquares.map((square) => {
// statement below says---  Does square.id matcch the Id passed into my toggle function?, if it does match return all the proprties of square execpt for the on property which is the opposite of square.on, if the ID does not match then simply return the square-- set up as an if else statement  below without the if else using es6
return square.id === id ? {...square, on: !square.on} : square
})

        })
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
