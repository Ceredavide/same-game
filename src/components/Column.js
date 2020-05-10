import React from "react"
import Cubo from './Cubo';

const Column = ({ column, onButtonClick }) => {
    return (
        <div style={styles.column}>
            {column.map(cube =>
                <div>
                    <Cubo state={cube} onButtonClick={onButtonClick} />
                </div>
            )}
        </div>
    )
}

const styles = {
    column: {

    }
}

export default Column