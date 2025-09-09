import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './pages/Form'
import Home from './pages/Home'
import Policies from './popups/Policies'
import SummaryOrder from './pages/SummaryOrder';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>

      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/ordersummary" element={<SummaryOrder />} /> 
      </Routes>

    </Router>
  )
}

export default App
