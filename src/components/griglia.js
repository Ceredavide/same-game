import React, {useState, useEffect} from "react";
import Cubo from './cubo';

const styles = {
    height: "auto",
    width: 330,
};

const Griglia = () => {
    const [cubi, setCubi] = useState([]);
    const color = ["yellow", "green", "blue", "red"];

    useEffect(() => {
        let newCubi = [];
        for (let i = 0; i < 25; i++) {
            const random = Math.floor(Math.random() * (4 - 0) + 0);
            newCubi = [...newCubi, color[random]];
        }

        setCubi(newCubi);
    }, []);

    return (
        <div style={styles}>
            {cubi.map((color, index) =>
                <Cubo key={index} style={{backgroundColor: "yellow"}} color={color}/>
            )}
        </div>
    )
};

export default Griglia;
