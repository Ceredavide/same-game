import React from "react";
import Cubo from './cubo';

let cubi = [];
const color = ["yellow","green","blue","red"];
 for (let i = 0; i < 25; i++) {
     const random = Math.floor(Math.random()*(4-0)+0);
        cubi.push(color[random]);
    }
const styles = {
    height : "auto",
    width : 330,
};
 const styleCubo = {
    height: 50,
    weight: 50,
    margin: 1,
     backgroundColor : "green"
}
const Griglia = () => {
 const styleCubo = {
    height: 50,
    weight: 50,
    margin: 1,

}
    return (
        <div style={styles}>
            {cubi.map(color => {return (<Cubo   style={{backgroundColor : "yellow"}} styles={{
                height: 50,
                weight: 50,
                margin: 1,
            backgroundColor: color
            }}/>)})}
        </div>
    )
};

export default Griglia;
