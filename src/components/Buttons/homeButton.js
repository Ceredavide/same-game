import React from "react";
import '../../Css/StartButton.scss'
import HomeIcon from '@material-ui/icons/Home'
import {withRouter} from "react-router";

const styles = {
    width : 50,
    height : 50,
};

const HomeButton = ({history}) => {

    return (
        <button className={'btn third'} onClick={() => history.push('/')}>
            <HomeIcon fontSize={"default"}/>
        </button>
    );
};

export default withRouter(HomeButton);
