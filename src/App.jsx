import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './pages/Form'
import Home from './pages/Home'
import Policies from './popups/Policies'

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/policies" element={<Policies />} />
      </Routes>

    </Router>
  )
}

export default App
