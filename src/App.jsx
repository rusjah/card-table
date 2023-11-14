import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Nav from './components/Nav';
import songs from './data'


function App() {
  return (
    <div className="App bg-gradient-to-r from-orange-100 to-orange-600 w-screen h-screen flex flex-col">
      <Nav />
      <div className='grow p-10 flex gap-4 flex-wrap justify-around  bg-gradient-to-r from-orange-100 to-orange-600'>
       {songs.map(el => <Card song={el} />)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
