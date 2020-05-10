import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const Cubo = ({ state, onButtonClick }) => {
    const [animatedClass, setAnimatedClass] = useState('');

    function animate() {
        // metterci setCubi
        setAnimatedClass('');
        setAnimatedClass('animated bounceIn')
        onButtonClick(state.x, state.y, state.color)
    }

    const styles = {
        height: 50,
        weight: 50,
        margin: 1
    }

    return (
        <Button
            variant="contained"
            className={animatedClass}
            color={"primary"}
            style={{ ...styles, backgroundColor: state.color }}
            onClick={animate}
        />
    )
}

export default Cubo;
