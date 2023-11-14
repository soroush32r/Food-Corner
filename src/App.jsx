import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, Menu, Contact, About, Header, Footer } from "./components"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Menu" element={<Menu />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
