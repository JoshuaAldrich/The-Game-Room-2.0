
import Homepage from './components/Homepage/Homepage';
import Header from './components/Nav/Header';


function App() {
  return (
    <div className="flex-column justify-flex-start">
      <Header />
      <div className='container-fluid'>
        <Homepage />

      </div>
    </div>
  );
}

export default App;
