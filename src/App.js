import './App.scss';
import logo from './logo.svg';

function App() {
  return (
    <div className="container">
      <nav className='header'>
      <img src={logo} alt="Logo" width='300px'/>
      </nav>
      <nav className="board"></nav>
      <div class="columns">
        <div className='column'>
          <header>Nazwa kolumny</header>
          <ul>
            <li>Zadanie 1</li>
            <li>Zadanie 2</li>
          </ul>
          <footer>Dodaj kolejne zadanie</footer>
        </div>
        <div className='column'>
          <header>Nazwa kolumny</header>
          <ul>
            <li>Zadanie 1</li>
            <li>Zadanie 2</li>
            <li>Zadanie 1</li>
            <li>Zadanie 2</li>
            <li>Zadanie 1</li>
            <li>Zadanie 2</li>
          </ul>
          <footer>Dodaj kolejne zadanie</footer>
        </div>

      </div>
    </div>
  );
}

export default App;
