import React from 'react';
import '../../Css/StartButton.scss'
import {withRouter} from 'react-router-dom';
// import {Button, Container} from '@material-ui/core';
// const styles = {  bottone con material
//     startButton: {
//         marginTop: 20,
//         width: 150,
//         height: 50,
//
//     }
// };
const StartButton = ({history}) => {
    return (
        <div>
        <button className={'btn third'} onClick={() => history.push("/game")}>Start Game</button>
    {/* variante con material  <Button variant="contained" color={"primary"} style={styles.startButton}>Start Game</Button>*/}
    </div>
    )
};
export default withRouter(StartButton);
