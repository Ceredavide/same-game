import React from "react";
import Column from "./Column"

import Box from '@material-ui/core/Box';

const Griglia = ({ columns, onButtonClick }) => {
    // todo dare flex direction cosi crea il cubo
    return (
        <Box p={1} m={1} flexDirection="column">
            {columns.map(column => <Column column={column} onButtonClick={onButtonClick} />)}
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
