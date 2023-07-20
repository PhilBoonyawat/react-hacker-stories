import * as React from 'react';

// define variable outside function to avoid re-defining it on every function call
const welcome = {
  title: 'Phil',
  greeting: 'Hey'
};

function App() {
  
  return (
    <div>
      <label htmlFor="firstname">Firstname: </label>
      <input type="text" id="firstname" />
      <h1>{welcome.greeting} {welcome.title}</h1>

    </div>
  );
}

export default App;