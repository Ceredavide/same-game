import React, { useState } from "react";
import Button from "@material-ui/core/Button";
const styles = {
    height: 50,
    weight: 50,
    margin: 1
}
const Cubo = ({styles}) => {
    const [animatedClass, setAnimatedClass] = useState('');

    return <Button variant="contained" className={animatedClass} color={"primary"} style={styles}
        onClick={() => {
            setAnimatedClass('');
            setAnimatedClass('animated bounceIn')
        }}
    />
}

export default Cubo;
