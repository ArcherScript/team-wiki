import React, { useContext } from 'react';
import queryString from 'query-string';
import { DataContext } from './../DataContext/DataContext';

export const PageContext = React.createContext();

const PageProvider = (props) => {
    const data = useContext(DataContext);
    // Parse the url
    const queryPage = queryString.parse(window.location.search);
    // Filter data set for current page
    const currentPage = data.pages.filter(page => page.title === queryPage.page)[0];
    return (
        <PageContext.Provider value={currentPage}>
            {props.children}
        </PageContext.Provider>
    );
}

export default PageProvider;