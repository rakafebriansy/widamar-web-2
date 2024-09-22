import ArPage from "./pages/ArPage"
import LandingPage from "./pages/LandingPage"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/ar' element={<ArPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
