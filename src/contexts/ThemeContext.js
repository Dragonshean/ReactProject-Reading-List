import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: true,
        light: { syntax: 'rgb(32, 23, 23)', ui: '#ddd', bg:'rgb(0, 225, 255)' },
        dark: { syntax: '#ddd', ui:'rgb(53, 16, 16)', bg:'rgb(5, 67, 103)'}
    }; 
    toggleTheme = () =>{
        this.setState({ isLightTheme: !this.state.isLightTheme });
    }
    render() { 
        return (
            <ThemeContext.Provider value={{...this.state/*...是包含state所有*/, toggleTheme: this.toggleTheme}}>
                {this.props.children/*包含NavBar and BookList*/}
            </ThemeContext.Provider>
        );
    };
};

export default ThemeContextProvider;