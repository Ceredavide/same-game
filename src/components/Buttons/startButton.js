import React from 'react';
import '../../Css/StartButton.scss'
import { withRouter } from 'react-router-dom';

const StartButton = ({ history }) => {
    return (
        <div>
            <button className={'btn third'} onClick={() => history.push("/game")}>Start Game</button>
        </div>
    )
};
export default withRouter(StartButton);
