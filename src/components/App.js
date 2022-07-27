import React, {useContext} from 'react';
import charactersContext from '../context/characters';

function App() {
  const context = useContext(charactersContext);
  const [characters] = context;
  return (
    <>
      <h1>Hooks</h1>
      {
        characters.map(item => {
          return <p>{item.name}</p>
        })
      }
    </>
  )
    
}

export default App;
