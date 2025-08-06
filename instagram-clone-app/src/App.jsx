
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import LoginNew from './pages/loginNew'
import { IstaMain } from './pages/instaMain'
import { ExplorePage } from './pages/ExplorePage'

function App() {
  

  return (
    <>
     
        
      
      
      <Routes>
        <Route path="/" element={<IstaMain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-new" element={<LoginNew />} />
        <Route path='/insta-main' element={<IstaMain />} />
        <Route path="/explore" element={<ExplorePage />} />
        {/* Add more routes as needed */}
        </Routes>
    </>
  )
}

export default App
