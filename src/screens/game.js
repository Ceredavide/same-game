import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import Cubo from "../components/cubo";

const useStyles = makeStyles({
    root: {
        padding: 10,
        height: 350,
        width: 350
    },
});

const Game = () => {
    const [buttonsState, setButtonsState] = useState([])

    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <Cubo />
        </Card>
    );
};

export default Game;
