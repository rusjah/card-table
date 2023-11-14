import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import songs from './data'


function App() {
  return (
    <div className="App bg-gradient-to-r from-orange-100 to-orange-600 w-screen h-screen flex flex-col">
      <Home />
    </div>
  );
}

export default App;
