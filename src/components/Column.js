import React from "react"
import Cubo from './Cubo';

const Column = ({ column, onButtonClick }) => {
    return (
        <div>
            {column.map(cube =>
                <Cubo state={cube} onButtonClick={onButtonClick} />)}
        </div>
    )
}


export default Column