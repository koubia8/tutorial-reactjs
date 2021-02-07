
import './App.css';
//import Button from './components/ButtonClass'
//import Button from './components/ButtonFunction'
import Counter from './hooks/Counter'
import CounterClass from './components/CounterClass'
function App() {
  return (
    <div className="App">
     {/*  <Button/> */}
     <Counter/>
     <hr/>
    <CounterClass/>
    </div>
  );
}

export default App;
