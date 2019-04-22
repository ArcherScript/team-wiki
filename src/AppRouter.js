import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Home from './Home/Home';
import Wiki from './Wiki/Wiki';
import data from './data.json';
import DataProvider from './DataContext/DataContext';
import SizeProvider from './SizeContext/SizeContext';
import PageProvider from './PageContext/PageContext';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: data.theme.primary
        },
        secondary: {
            main: data.theme.secondary
        },
    },
    typography: {
        useNextVariants: true
    }
})

const AppRouter = () => {
    return (
        <Router>
            <MuiThemeProvider theme={theme}>
                <DataProvider>
                    <SizeProvider>
                        <Route path="/" exact component={Home} />
                        <PageProvider>
                            <Route path="/Wiki" component={Wiki} />
                        </PageProvider>
                    </SizeProvider>
                </DataProvider>
            </MuiThemeProvider>
        </Router>
    );
};

export default AppRouter;