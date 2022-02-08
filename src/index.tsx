import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app/App'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/themes/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
