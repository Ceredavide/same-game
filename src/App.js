import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './Css/App.css';
import { Container } from '@material-ui/core'

import Home from "./screens/Home"
import Game from './screens/Game'

const App = () => {
    return (
        <Container>
            <Router>
                <div style={styles.container}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/game" component={Game} />
                    </Switch>
                </div>
            </Router>
        </Container>

    );
};

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

export default App;
