import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContexts';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContexts';


function App() {
  return (
    <div className="App">
        <ThemeContextProvider>
          <AuthContextProvider>
            <Navbar />
            <BookList />
            <ThemeToggle />
          </AuthContextProvider>
        </ThemeContextProvider>
    </div>
  );
}

export default App;
