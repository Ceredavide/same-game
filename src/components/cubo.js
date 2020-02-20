import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        height: 50,
        weight: 50,
        margin: 1,
        backgroundColor: props => props.color
    },
});

const Cubo = ({...props}) => {
    const [animatedClass, setAnimatedClass] = useState('');
    const classes = useStyles(props);

    return <Button classes={{animatedClass, ...classes}} variant="contained"
                   onClick={() => {
                       setAnimatedClass('');
                       setAnimatedClass('animated bounceIn')
                   }}
    />
};

export default Cubo;
