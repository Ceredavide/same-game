import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import {Container} from '@material-ui/core'
import startButton from "./components/startButton";

const styles = {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    startButton: {
        marginTop: 20,
        width: 150,
        height: 50,

    }
};

const App = ({hystory}) => {

    return (
        <Container>
            <Router>
                <div style={styles.container}>

                </div>
            </Router>
        </Container>

    );
};

export default App;
