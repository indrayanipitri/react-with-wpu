
import { useState } from 'react';
import Header from './components/Header';


function App() {

  const [likes, setLikes] = useState(0);

  function handleClick() {
     setLikes(likes + 1);
   }

  return (
    <>
      <Header name="pipit"/>
      <button onClick={handleClick}> Like ({likes})</button>
    </>
  )
}

export default App
