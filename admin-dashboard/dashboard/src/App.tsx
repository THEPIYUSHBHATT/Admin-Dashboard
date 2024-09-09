import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"

const App = () => {
  return (
    <Router>
      <Routes>
         <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}
export default App