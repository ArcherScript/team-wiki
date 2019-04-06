import React, { Component } from 'react';
import data from './../data.json';

export const DataContext = React.createContext();

class DataProvider extends Component {
    render() {
        return (
            <DataContext.Provider value={data}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

export default DataProvider;