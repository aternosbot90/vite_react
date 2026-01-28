// import { fetchPhotos, fetchVideos } from './api/mediaApi'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Collection from './pages/CollectionPage'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';


const App = () => {

  return (
    <div className="min-h-screen text-white w-full bg-grey-950">
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      
      <ToastContainer />
    </div>
  )
}

export default App