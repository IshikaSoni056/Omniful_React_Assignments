import { useState } from 'react';
import './App.css'
import useLocalStorage from './hooks/useLocalStorage';
import useDebounce from './hooks/useDebounce';
import useFetch from './hooks/useFetch';

function App() {
  const [count, setCount] = useLocalStorage("myCounter", 0);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);
   const { data, loading, error, fetchData } = useFetch();

   const handleFetch = () => {
    fetchData("https://jsonplaceholder.typicode.com/posts");
  };

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

    <div style={{ padding: "20px", textAlign: "center", backgroundColor: "rgba(211, 228, 102, 0.5)" }}>
      <h2>Debounce Example</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>Typing: {searchTerm}</p>
      <p>Debounced (500ms): {debouncedSearch}</p>
    </div>

     <div style={{padding: "20px", textAlign: "center", backgroundColor: "rgba(102, 228, 194, 0.5)" }}>
     <h2> Button-Triggered Fetch</h2>

      <button onClick={handleFetch}>Fetch Posts</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {data && (
        <ul>
          {data.slice(0, 5).map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  )
}

export default App
