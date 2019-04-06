import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Home from './Home/Home';
import Wiki from './Wiki/Wiki';
import data from './data.json';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: data.theme.primary
        },
        secondary: {
            main: data.theme.secondary
        },
    }
})

const AppRouter = () => {
    return (
        <Router>
            <MuiThemeProvider theme={theme}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Wiki" component={() => <Wiki theme={theme} />} />
                </Switch>
            </MuiThemeProvider>
        </Router>
    );
};

export default AppRouter;