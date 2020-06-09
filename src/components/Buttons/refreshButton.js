import React from "react";
import '../../Css/StartButton.scss'
import RefreshIcon from '@material-ui/icons/Refresh';

const RefreshButton = ({history}) => {

    return (
        <button className={'btn third'} >
            <RefreshIcon fontSize={"medium"}/>

        </button>
    );
};

export default RefreshButton;
