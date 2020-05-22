import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const Cubo = ({ color, onButtonClick, x, y }) => {
    const [animatedClass, setAnimatedClass] = useState('');

    const animate  = () => {
        // metterci setCubi
        setAnimatedClass('');
        setAnimatedClass('animated bounceIn')
        onButtonClick(x, y, color)
    }

    const styles = {
        height: 50,
        weight: 50,
        margin: 3
    }

    return (
        <Button
            variant="contained"
            className={animatedClass}
            color={"primary"}
            style={{ ...styles, backgroundColor: color }}
            onClick={animate}
        />
    )
}

export default Cubo;
