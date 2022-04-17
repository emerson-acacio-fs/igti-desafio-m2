import { Home } from "pages/Home"
import { ToastContainer } from "react-toastify"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "styles/GlobalStyles"
import { theme } from "styles/theme"

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
