import React from "react";
import '../../Css/StartButton.scss'
import RefreshIcon from '@material-ui/icons/Refresh';
import {withRouter} from "react-router";

const styles = {
    width : 50,
    height : 50,
};

const RefreshButton = ({history}) => {

    return (
        <button className={'btn third'} >
            <RefreshIcon fontSize={"medium"}/>

        </button>
    );
};

export default RefreshButton;
