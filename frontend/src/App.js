import './App.css';
import ImageDetails from './ImageDetail';
import ImageGallery from './ImageGallery';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ImageGallery />} />
          <Route path='/:id' element={<ImageDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;