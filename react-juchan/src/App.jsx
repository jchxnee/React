import { useState } from 'react'
import './App.css'
import Iconload from './components/Iconload'
import GlobalStyle from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './theme'
import Themechange from './components/Themechange'

function App() {

  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      {/* <Iconload/> */}
      <ThemeProvider theme={isDark? darkTheme : lightTheme}>
      <GlobalStyle/>
      <Themechange onToggleTheme = {toggleTheme}/>
      </ThemeProvider>
    </>
  )
}

export default App
