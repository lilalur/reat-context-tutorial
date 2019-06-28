// import React, { Component } from 'react';
// import { ThemeContext } from '../contexts/ThemeContexts';

// class Navbar extends Component {
//     static contextType = ThemeContext; //nto the provider!
//     render () {
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;
//         return (
//             <nav style={{ background: theme.ui, color: theme.syntax }}>
//                 <h1>Context App</h1>
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                 </ul>
//             </nav>
//         );
//     }
// }

// export default Navbar;

//OR!

import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContexts';
import { AuthContext } from '../contexts/AuthContexts';

class Navbar extends Component {
    render () {
        return (
            <AuthContext.Consumer>{(AuthContext) => (
                <ThemeContext.Consumer>{(ThemeContext) => {
                    const { isAuthenticated, toggleAuth } = AuthContext;
                    const { isLightTheme, light, dark } = ThemeContext;
                    const theme = isLightTheme ? light : dark;
                    return (
                    <nav style={{ background: theme.ui, color: theme.syntax }}>
                        <h1>Context App</h1>
                        <div onClick= { toggleAuth }>
                            { isAuthenticated ? 'logged in' : 'logged out'}
                        </div>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                    )
                }}</ThemeContext.Consumer>
            )}</AuthContext.Consumer>
        );
    }
}

export default Navbar;