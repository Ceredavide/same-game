import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const Cubo = () => {
    const [animatedClass, setAnimatedClass] = useState('');

    return <Button variant="contained" className={animatedClass} color={"primary"} style={{
        height: 50,
        weight: 50,
        margin: 1
    }}
        onClick={() => {
            setAnimatedClass('');
            setAnimatedClass('animated bounceIn')
        }}
    />
}

export default Cubo;