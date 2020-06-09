import React from "react";
import Column from "./Column"

import Box from '@material-ui/core/Box';

const Griglia = ({ columns, onButtonClick }) => {
    // todo dare flex direction cosi crea il cubo
    return (
        <Box display="flex" className={'rotated'}>
            {columns.map((column, index) =>
                <Box key={index}>
                    <Column x={index} column={column} onButtonClick={onButtonClick} />
                </Box>
            )}
        </Box>
    )
};

export default Griglia;
