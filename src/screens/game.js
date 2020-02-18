import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import Griglia from "../components/griglia";

const useStyles = makeStyles({
    root: {
        paddingLeft: 10,
        paddingRight : 10,
        height: 360,
        width: 330

    },
    griglia : {

    }
});

const Game = () => {
    const [buttonsState, setButtonsState] = useState([]);
    const classes = useStyles();
    return (

        <Card className={classes.root}>
            <Griglia/>

        </Card>
    );
};


export default Game;
