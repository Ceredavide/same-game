import React from "react";
import Column from "./Column"

import Box from '@material-ui/core/Box';

const Griglia = ({ columns, onButtonClick }) => {
    // todo dare flex direction cosi crea il cubo
    return (
        <Box flexDirection="row" display="flex">
            {columns.map((column, index) =>
                <Box>
                    <Column x={index} column={column} onButtonClick={onButtonClick} />
                </Box>
            )}
        </Box>
    )
};

const styles = {
    griglia: {
        height: "auto",
        width: "auto",
    }
};

export default Griglia;
