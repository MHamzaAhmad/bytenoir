import '@/styles/globals.css'
import '@/src/components/widgets/loader/styles.css'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/src/styles/theme'
import { Provider } from 'react-redux'
import store from '@/src/store/store'

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
