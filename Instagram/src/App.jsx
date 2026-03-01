import './App.css'

function Navbar() {
  return <div className="block navbar">Header</div>;
}

function Card() {
  return <div className="block card">Card</div>;
}

function Footer() {
  return <div className="block footer">Footer</div>;
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <Card />
      <Footer />
    </div>
  );
}

export default App
