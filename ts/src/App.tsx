import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import { 
  Navbar,
  Home,
  About,
  Contact,
  Company,
  Marketing,
  Footer,
  Partners,
  NotFound
 } from "./pages"

const App = (): JSX.Element => {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
