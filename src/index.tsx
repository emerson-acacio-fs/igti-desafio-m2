import "react-toastify/dist/ReactToastify.css"
import React from "react"
import * as ReactDOMClient from "react-dom/client"
import App from "./App"

const container = document.getElementById("root")
if (!container) throw new Error("Failed to find the root element")
const root = ReactDOMClient.createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
