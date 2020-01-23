import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import {Container,Input} from '@material-ui/core'
import StartButton from "./components/startButton";

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

            <Switch>
                <Route exact path="/" component={() => <StartButton/>}/>
                <Route exact path="/game" component={() => <Input value={"game"}/>}/>

            </Switch>
                </div>
                    </Router>

        </Container>

    );
};

export default App;
