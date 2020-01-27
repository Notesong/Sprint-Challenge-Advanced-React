import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const AppHeader = () => {

    const [darkMode, setDarkMode] = useDarkMode('DarkMode', false);

    // toggle dark mode
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return(
        <div className="header" data-testid="header">
            <div>
                <h1>Women's World Cup</h1>
                <h3>Players ranked by search interest</h3>
                <h3>Google Trends, June-July 2019</h3>
            </div>
            <div className="dark-mode__toggle">
                {/* will change text based on mode */}
                <p className="dark-mode-text">Dark Mode: {darkMode ? 'On' : 'Off'}</p>
                {/* toggle button to change dark mode on or off. Uses toggleMode() */}
                <button
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </div>
    )
};

export default AppHeader;