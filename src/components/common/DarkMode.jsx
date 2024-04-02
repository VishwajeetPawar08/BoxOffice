import { useEffect, useState } from 'react';

export default function DarkMode(){
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Apply dark mode preference from local storage, if available
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference) {
      setIsDarkMode(JSON.parse(darkModePreference));
    }
  }, []);

  useEffect(() => {
    // Apply dark mode styles when isDarkMode changes
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    // Save dark mode preference to local storage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="App">
      <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
}
