import './App.css';
import Title from './components/title'
import Search from './components/search'
import ErrorPage from './components/errorPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Title/>} />
        <Route path='/games' element={<Search/>} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
