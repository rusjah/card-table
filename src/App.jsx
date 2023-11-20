import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Table from './components/pages/Table';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';


function App() {
  return (
    <div className="App bg-gradient-to-r from-orange-100 to-orange-600 w-screen h-screen flex flex-col">
      <Nav />
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/table' element={<Table />} />
       </Routes>
       <Footer />
       
    </div>
  );
}

export default App;
