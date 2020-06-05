import React from "react"
import Cubo from './cubo';

import Box from '@material-ui/core/Box';

const Column = ({ x, column, onButtonClick }) => {
    return (
        <Box>
            {column.map((color, index) =>
                <Box>
                    <Cubo y={index} x={x} color={color} onButtonClick={onButtonClick} />
                </Box>
            )}
        </Box>
    )
}


export default Column