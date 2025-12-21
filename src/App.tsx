import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Reuter } from './Router'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global';

export function App() {
  return (

    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>

        <Reuter />

      </BrowserRouter>
      
      <GlobalStyle />
    </ThemeProvider>

  )
}

