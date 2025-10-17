import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  const handleCount = (value) => {
    if (value <= 10 && value >= 0) {
      setCount(value)
    }
  }

  return (
    <div className="App">
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
        <button onClick={() => handleCount(count + 1)}>Increment</button>
        <p>{count}</p>
        <button onClick={() => handleCount(count - 1)}>Decrement</button>
      </div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <p>{name}</p>
    </div>
  );
}

export default App;
