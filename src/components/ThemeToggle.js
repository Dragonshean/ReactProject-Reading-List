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
        // <button onClick={toggleTheme}>Color Shift</button>  普通的按鈕
        <div>
            <input onClick={toggleTheme} type="checkbox" id="check1" className="toggle"/>
            <label htmlFor="check1">Toggle to change theme</label>
        </div>
    );
}

export default ThemeToggle;