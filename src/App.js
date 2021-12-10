import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import { Logout } from './components/Logout';

function App() {
  const user =useSelector(selectUser)
  return (
    <div className="App">
     {user?<Logout/>:<Login/>}
    </div>
  );
}

export default App;
