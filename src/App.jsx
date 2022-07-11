import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { ColorModeContext } from './helper/Context'
import { useState, useMemo } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { mojoTheme } from './helper/mojoTheme'

import Home from './pages/Lobby'

function App() {

  const [mode, setMode] = useState('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )
  const theme = mojoTheme(mode)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Router>
            <Routes>
              <Route path='/'>
                <Route index element={<Home />} />

                {/* Catch all - replace with 404 component if you want */}
                <Route path='*' element={<Navigate to='/' replace />} />
              </Route>
            </Routes>
          </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
