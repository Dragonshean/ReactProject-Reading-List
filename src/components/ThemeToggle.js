import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

/* Class Component 寫法 
import React, { Component } from 'react'
class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() { 
        const { toggleTheme } = this.context;
        return (
            <button onClick={toggleTheme}>Toggle the theme</button>
        );
    }
}

export default ThemeToggle;
*/


/* React Hook 寫法 */

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext)
    return ( 
        <button onClick={toggleTheme}>Toggle the theme</button>
    );
}

export default ThemeToggle;