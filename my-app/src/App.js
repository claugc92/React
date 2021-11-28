
import './App.css';
import Greeting from './components/Greeting';

//para utilizar el componente que hicimos, se utiliza solo una funcion 
// y se llama como aparece en "Greeting"

function App() {
  return (
    <div className="App"> <div>
      <span>Mi primer componente</span> 
      <Greeting />
      </div>
    </div>
  );
}

export default App;
