import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import SearchResults from './pages/SearchResults/SearchResults';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/items' element={<SearchResults/>} />
      <Route path='/items/:id' element={<ProductDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
