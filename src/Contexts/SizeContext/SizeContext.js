import React, { useState } from 'react';

export const SizeContext = React.createContext();

const DesktopProvider = (props) => {
    const [width, setWidth] = useState(window.innerWidth);
    
    const updateWindowDimensions = () => {
        setWidth(window.innerWidth);
    }

    window.addEventListener('resize', updateWindowDimensions);

    return (
        <SizeContext.Provider value={width > 600}>
            {props.children}
        </SizeContext.Provider>
    );
}

export default DesktopProvider;