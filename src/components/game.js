import React from "react";
import Button from "@material-ui/core/Button";


const Game = () => {
const cubo = (
    <Button  variant="contained" color={"primary"} style={{
        height : 50,
        weight : 50,
        margin : 1
    }}/>
);



    return(
      <div style={{color : 'white'}} >

          {cubo}
          {cubo}
          {cubo}
          {cubo}
          {cubo}
          {cubo}
          {cubo}
            <br/>
          {cubo}
          {cubo}
          {cubo}
          {cubo}
          {cubo}
          {cubo}
          {cubo}
<br/>
          {cubo}
          {cubo}
          {cubo}
          {cubo}
          {cubo}
          {cubo}
          {cubo}



      </div>
    );
};

export default Game;
