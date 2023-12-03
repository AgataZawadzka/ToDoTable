import './App.scss';
import logo from './logo.svg';
import Board from './components/BoardColumn/Board';

function App() {
  return (
    <div className="container">
      <nav className='header'>
          <img src={logo} alt="Logo" width='300px'/>
      </nav>
      <nav className="board"></nav>
      <Board/>
    </div>
  );
}

export default App;
