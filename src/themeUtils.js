export const saveThemePreference = (isDarkMode) => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
};

export const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
};