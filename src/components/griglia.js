import React from "react";
import Column from "./Column"


const Griglia = ({ columns, onButtonClick }) => {
    // todo dare flex direction cosi crea il cubo
    return (
        <div style={{flexDirection: "row"}}>
            {columns.map(column => <Column column={column} onButtonClick={onButtonClick} />)}
        </div>
    )
};

const styles = {
    griglia: {
        height: "auto",
        width: "auto",
    }
};

export default Griglia;
