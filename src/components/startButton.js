import React from 'react';
import  '.src/StartButton.sccs';
import {withRouter} from 'react-router-dom';
// import {Button, Container} from '@material-ui/core';

const StartButton = ({history}) => {
    return (
        <>
        <button className={'btn third'} onClick={() => history.push("/")}>Start Game</button>
    {/* variante con material  <Button variant="contained" color={"primary"} style={styles.startButton}>Start Game</Button>*/}
    </>
    )
};
export default withRouter(StartButton);
