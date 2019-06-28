// togle the light and dark team
import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContexts';

class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render () {
        const { toggleThemeFun } = this.context;
        return (
            <button onClick={ toggleThemeFun } >Toggle the theme</button>
        );
    }
}

export default ThemeToggle;