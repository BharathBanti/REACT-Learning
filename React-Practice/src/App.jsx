import { useState } from 'react'
import './App.css'

function App() {
  console.log("App Rendered");

  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <Header />
      <Content count={count} />
      <Footer />
    </div>
  );
}

function Header() {
  console.log("Header Rendered");
  return <h1>Header</h1>;
}

function Content({ count }) {
  console.log("Content Rendered");
  return <h2>{count}</h2>;
}

function Footer() {
  console.log("Footer Rendered");
  return <h1>Footer</h1>;
}

export default App
