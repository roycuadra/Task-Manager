
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Trigger SweetAlert2 pop-up when the component mounts
    Swal.fire({
      title: 'Welcome to our site!',
      text: 'Thank you for visiting us.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }, []);
   
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>TASK MANAGER CODE IS SET TO PRIVATE</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        <a href="https://github.com/roycuadra">ROY CUADRA</a>
      </p>
    </>
  )
}

export default App
