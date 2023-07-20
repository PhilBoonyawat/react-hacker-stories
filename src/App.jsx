import * as React from 'react';

// define variable outside function to avoid re-defining it on every function call
const welcome = {
  title: 'Phil',
  greeting: 'Hey'
};

const list = [
  {
    title:'React',
    author: "Phil",
    points: 3,
    id: "sfasfasdfw23823d"
  },
  {
    title: "G",
    author: "Y",
    points: 10,
    id: "9f9hf9s8fh9ufb9"
  }
]

function App() {
  
  return (
    <div>
      <label htmlFor="firstname">Firstname: </label>
      <input type="text" id="firstname" />
      <h1>{welcome.greeting} {welcome.title}</h1>

      <hr/>

      <ul>
        {list.map(function(item) {
          return <li key={item.id}><span>{item.title}</span></li>
        })}
      </ul>
    </div>
  );
}

export default App;