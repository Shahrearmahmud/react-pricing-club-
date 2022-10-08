import './App.css';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h2 className='text-4xl mt-4'>Welcome to my pricing club</h2 >
      <Pricing></Pricing>
    </div>
  );
}

export default App;
