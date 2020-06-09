import React from "react";
import '../../Css/StartButton.scss'
import HomeIcon from '@material-ui/icons/Home'
import {withRouter} from "react-router";

const HomeButton = ({history}) => {

    return (
        <button className={'btn third'} onClick={() => history.push('/')}>
            <HomeIcon fontSize={"medium"}/>

        </button>
    );
};

export default withRouter(HomeButton);
