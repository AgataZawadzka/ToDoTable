import './App.scss';
import logo from './logo.svg';
import Board from './components/BoardColumn/Board';
// import {firebase} from "./firebase/firebase.js"

function App() {
  return (
    <div className="main-container">
      <nav className='header'>
          <img src={logo} alt="Logo" width='300px'/>
      </nav>
      <nav className="board"></nav>
      <Board/>
    </div>
  );
}

export default App;
