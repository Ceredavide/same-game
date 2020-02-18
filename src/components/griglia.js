import React from "react";
import Cubo from './cubo';

let cubi = [];

const styles = {
    height : "auto",
    width : 330,
};
const Griglia = () => {

    for (let i = 0; i < 25; i++) {
        cubi.push(i);
    }
    return (
        <div style={styles}>
            {cubi.map(index => {return (<Cubo value={index}/>)})}
        </div>
    )
};

export default Griglia;
