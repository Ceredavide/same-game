import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import HomeButton from "../components/Buttons/homeButton";
import RefreshButton from "../components/Buttons/refreshButton";
import Griglia from "../components/griglia";

const useStyles = makeStyles({
    root: {
        padding: 10,
        height: 360,
        width: 330,
        backgroundColor : 'gray'

    },
    griglia : {

    }
});

const Game = () => {
    const [buttonsState, setButtonsState] = useState([]);
    const classes = useStyles();
    return (

        <Card className={classes.root} elevation={3} >
            <Griglia/>
            <div>
                <HomeButton/>
            </div>
        </Card>
    );
};


export default Game;
