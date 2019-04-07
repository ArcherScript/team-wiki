import React, { Component } from 'react';

export const SizeContext = React.createContext();

class DesktopProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { width: window.innerWidth, height: window.innerHeight };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        return (
            <SizeContext.Provider value={ this.state.width > 500 }>
                {this.props.children}
            </SizeContext.Provider>
        );
    }
}

export default DesktopProvider;