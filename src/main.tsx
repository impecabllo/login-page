import { BrowserRouter } from "react-router"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "@/pages/App"

// base styles and fonts
import "normalize.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
