import { useState } from 'react';
import './App.css';
import App2 from './App2';

function App() {
  let message = "King is here. But where is the Queen?";
  function handleClick(){
    
    setCount(count+1);
    document.getElementById("btn1").style.cssText='color:black; background-color:rgb(140, 204, 252)';
    document.getElementById("btn2").style.cssText='color:black; background-color:rgb(140, 204, 252)';
    console.log("Queen has not found ('_')");

  };
  const [count,setCount] = useState(0); 
  return (
    <div>
    <h1>{message}</h1>
    <button id="btn1" onClick={handleClick}>Searched for Queen {count} times</button><br/>
    <button id="btn2" onClick={handleClick}>Searched for Queen {count} times</button>
    <App2 count={count}/>
    </div>
  );
}

export default App;
