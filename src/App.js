import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import {Container} from '@material-ui/core'
import StartButton from "./components/startButton";
import Game from './components/game'

const styles = {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
       marginTop: 200,
    },
    startButton: {
        marginTop: 20,
        width: 150,
        height: 50,

    }
};

const App = () => {
    return (
        <Container>
            <Router>
                <div style={styles.container}>
                    <Switch>
                        <Route exact path="/" component={() => <div><StartButton/> </div>}/>
                        <Route exact path="/game" component={() => <Game/>}/>

                    </Switch>
                </div>
            </Router>
        </Container>

    );
};

export default App;
