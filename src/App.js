import logo from './logo.svg';
import './App.css';
import UserComponent from './UserComponent';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
         <UserComponent/>
      </header>
    </div>
  );
}

export default App;
