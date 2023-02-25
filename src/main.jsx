import React from 'react'
import ReactDOM from 'react-dom/client'
import { ProductInfo } from './pages/ProductInfo'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ProductInfo />
    </ThemeProvider>
  </React.StrictMode>,
)
