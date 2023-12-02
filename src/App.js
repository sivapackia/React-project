import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Store from './Project/Store';
import Rout from './Project/Router';

function App() {
  return (
    <div className="">

      <Provider store={Store}>
      <Rout/>
      </Provider>
      
    </div>
  );
}

export default App;
