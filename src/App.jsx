import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Menu, About, Header, Footer } from "./components"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Menu />}/>
        <Route path="/About" element={<About />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
