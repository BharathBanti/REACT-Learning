// import { useState } from 'react'
import { useState } from 'react';
import './App.css'

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function App() {
  return <div className='app'>
    <Logo />
    <Form />
    <PackingList />
    <Stats />
  </div>
}

function Logo(){
  return <h1>✈️🚂 Far Away 🏍️🚗</h1>;
}

function Form(){
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e){
    e.preventDefault();

    if(!description) return;

    const newItem = {description, quantity, packed: false, id: Date.now()};
    console.log(newItem);

    setDescription('');
    setQuantity(1);
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your 🌴 trip?</h3>
      <select value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
        {Array.from({length: 20}, (_, i) => i + 1).
        map(num =>(
          <option value={num} key={num}>
            {num}
          </option>
        ))}

        {/* <option value={1}>1</option>
        <option value={1}>1</option>
        <option value={1}>1</option> */}
      </select>
      <input 
      type="text" 
      placeholder='Item...' 
      value={description} 
      onChange={(e)=>setDescription(e.target.value)}/>
      <button type='submit'>Add</button>
    </form>
  );
}

function PackingList(){
  return (
    <div className='list'>
      <ul>
        {initialItems.map(item => <Item item={item}/>)}
      </ul>
    </div>
  );
}

function Item({item}){
  return (
    <li className='listItem' key={item.id}>
      <span style={item.packed ? {textDecoration: "line-through"} : {}}>
        {item.quantity}
        {" "}
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats(){
  return <footer className='stats'>
    <em>You have X items on your list, and you already packed X (X%)</em>
  </footer>
}

export default App
