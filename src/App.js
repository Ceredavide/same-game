import React from 'react';
import {BrowserRouter as Router,

} from "react-router-dom";
import './App.css';
import {Button, Container} from '@material-ui/core'

const styles = {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    startButton : {
        marginTop : 20,
        width: 150,
        height: 50,

    }
};

const App = () => {

    return (
        <Container>
            <Router>
                <div style={styles.container}>
                    <Button variant="contained" color={"primary"} style={styles.startButton}>
                        Start Game
                    </Button>
                </div>
            </Router>
        </Container>

    );
};

export default App;
