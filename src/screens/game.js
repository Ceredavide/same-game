import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';

import HomeButton from "../components/Buttons/homeButton";
import RefreshButton from "../components/Buttons/refreshButton";
import Griglia from "../components/griglia";

import useGame from "../hooks/useGame"

const Game = () => {

    const colors = ["yellow", "green", "blue", "red"];

    const LEN_X = 5

    const LEN_Y = 5

    const { columns, score, gameCounter, play } = useGame(colors, LEN_X, LEN_Y)

    function onButtonClick(x, y) {
        play(x, y)
    }

    const classes = useStyles();
    return (
        <Card className={classes.root} elevation={3} >
            <Griglia columns={columns} onButtonClick={onButtonClick} />
            {/* Mettere punteggio */}
            <div style={{ padding: 20 }}>
                <Box display="flex" flexDirection="row" justifyContent="space-around">
                    <div>
                        Punteggio: {score}
                    </div>
                    <div>
                        N° giocate: {gameCounter}
                    </div>
                </Box>
                <Box display="flex" flexDirection="row">
                    <HomeButton />
                    <RefreshButton />
                </Box>
            </div>
        </Card>
    );
};

const useStyles = makeStyles({
    root: {
        padding: 10,
        backgroundColor: 'gray',
    }
});

export default Game;
