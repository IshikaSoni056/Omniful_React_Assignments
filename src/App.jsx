import './App.css'
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [count, setCount] = useLocalStorage("myCounter", 0);
  return (
    <>
   <div style={{ padding: "20px", textAlign: "center", backgroundColor: "rgba(228, 102, 102, 0.5)"}}>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <br /><br />

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
    </>
  )
}

export default App
