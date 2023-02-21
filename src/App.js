import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchGreetingObj } from './redux/greetings/greetings';
import Greeting from './components/Greeting';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetingObj());
  }, [dispatch]);


  return (
    <div className="App">
      <h2>Someone says</h2>
      <Greeting />
    </div>
  );
}

export default App;
