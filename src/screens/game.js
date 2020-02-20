import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import HomeButton from "../components/Buttons/homeButton";
import Griglia from "../components/griglia";

const useStyles = makeStyles({
    root: {
        padding: 10,
        height: 360,
        width: 330,
        backgroundColor : 'gray'
    }
});

const Game = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={3} >
            <Griglia/>
            <>
                <HomeButton/>
            </>
        </Card>
    );
};

export default Game;
