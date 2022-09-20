import './App.css';
import Navbar from './components/navbar';
import Slider from './pages/slider';
import Routing from './routes/routes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routing/>
    </div>
  );
}

export default App;
