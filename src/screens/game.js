import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import HomeButton from "../components/Buttons/homeButton";
import RefreshButton from "../components/Buttons/refreshButton";
import Griglia from "../components/Griglia";
import useColumns from "../hooks/useColumns";

const Game = () => {
    const [gameCounter, setGameCounter] = useState(0)
    const [columns, setColumns] = useState(useColumns())
    const [score, setScore] = useState(0)

    function onButtonClick(x, y, color) {
        columns[y-1].pop(x)
        setColumns([...columns])
        console.table([...columns])
    }

    const classes = useStyles();
    return (
        <Card className={classes.root} elevation={3} >
            <Griglia columns={columns} onButtonClick={onButtonClick} />
            {/* Mettere punteggio */}
            <div>
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
