import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Reuter } from './Router'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global';
import { CycleContextProvider } from './contexts/CyclesContext';

export function App() {
  return (

    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CycleContextProvider>
          <Reuter />
        </CycleContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>

  )
}

