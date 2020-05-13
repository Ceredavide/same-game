import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import HomeButton from "../components/Buttons/homeButton";
import RefreshButton from "../components/Buttons/refreshButton";
import Griglia from "../components/Griglia";

import useCheckColors from "../hooks/useCheckColors"

const Game = () => {
    const [gameCounter, setGameCounter] = useState(0)
    const [score, setScore] = useState(0)

    const { columns, checkColor, removeCoordinates } = useCheckColors()

    function onButtonClick(x, y) {
        console.log(x,y)
        setGameCounter(gameCounter + 1)
        // checkColor(x, y)
        // removeCoordinates()
    }

    const classes = useStyles();
    return (
        <Card className={classes.root} elevation={3} >
            <Griglia columns={columns} onButtonClick={onButtonClick} />
            {/* Mettere punteggio */}
            <div>
                {gameCounter}
                <HomeButton />
                <RefreshButton />
            </div>

        </Card>
    );
};

const useStyles = makeStyles({
    root: {
        padding: 10,
        backgroundColor: 'gray'
    },
    griglia: {

    }
});

export default Game;
