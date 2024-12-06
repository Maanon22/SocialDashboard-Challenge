import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import App from './App.tsx'
import ThemeContext from "./src/ThemeContext.tsx"
import React from 'react'

function Main() {
  const [theme, setTheme] = useState<boolean>(false);

  return (
    <StrictMode>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <App />
      </ThemeContext.Provider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Main />)
  
