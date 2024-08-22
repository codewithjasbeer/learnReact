import React, {useState} from "react";
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App()
{
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count+1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const resetCounter = () => {
    setCount(0);
  };


  return(
    <div className="App">
      <header className="header">Welcome to the basic React App</header>
      <main className="mainSection">
      <h1>First Counter App</h1>
      <div className="counter-section">{count}</div>
      <div className="button-section">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={resetCounter}>Reset Counter</button>
      </div>
      </main>
      <div className="social">
        <a href="https://www.linkedin.com/in/singhjasbeer" className="linkedin" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> 
        </a>
        <a href="https://www.twitter.com/codewithjasbeer" className="twitter" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i> 
        </a>
        <a href="https://www.medium.com/@singhthepoet" className="medium" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-medium"></i> 
        </a>
        <a href="https://www.instagram.com/codewithjasbeer" className="instagram" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> 
        </a>
      </div>
      <footer className="footer">
        Learn Code with Jasbeer Singh @codewithjasbeer
      </footer>
    </div>
  );
}
export default App;