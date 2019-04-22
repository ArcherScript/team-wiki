import React from 'react';
import data from './../../data.json';

export const DataContext = React.createContext();

const DataProvider = (props) => {
        return (
            <DataContext.Provider value={data}>
                {props.children}
            </DataContext.Provider>
        );
}

export default DataProvider;