
import Hello from './components/Hello';
import { useEffect, useState } from 'react';

export default function App() {

  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    console.log(data.slip.advice);

    setAdvice(data.slip.advice);
    setCount(c => c + 1);
  }

  useEffect(function(){
    async function fetchInitialAdvice() {
      await getAdvice();
    }
    fetchInitialAdvice();
  }, [])

  return (
    <div>
      <h1>Hello React 👋</h1>
      <Hello/>
      <p>{advice}</p>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count}/>
    </div>
  );
}

function Message(props){
  return (
    <div>
      <p>You have read <strong>{props.count}</strong> pieces of advice</p>
    </div>
  )
}