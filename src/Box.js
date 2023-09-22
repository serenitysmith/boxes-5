import React from "react"

export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    
    return (
        <div 
            style={styles} 
            className="box"

            // on click funtion below --every time box gets clicked it runs below function
            onClick={()=>props.toggle(props.id)}
        >
        </div>
    )
}