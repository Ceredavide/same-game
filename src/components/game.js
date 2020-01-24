import React, {useState} from "react";
import Button from "@material-ui/core/Button";


const Game = () => {
    const [animatedClass, setAnimatedClass] = useState('');
    let cubo;


        cubo = (
            <Button variant="contained" className={animatedClass} color={"primary"} style={{
                height: 50,
                weight: 50,
                margin: 1
            }}
                    onClick={() =>{ setAnimatedClass('');
                   setAnimatedClass('animated bounceIn')}}
            />
        );

    //= (
    //     <Button variant="contained" className={animatedClass} color={"primary"} style={{
    //         height: 50,
    //         weight: 50,
    //         margin: 1
    //     }}
    //             onClick={() => setAnimatedClass('animated bounceIn')}
    //     />
    // );

    return (
        <div style={{color: 'white'}}>
            {cubo}
            Già lo sai
        </div>
    );
};

export default Game;
