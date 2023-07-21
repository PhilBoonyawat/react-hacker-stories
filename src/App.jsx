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
];

const App = () => 
  
 (
    <div>
      <Label />
      <InName />
      <h1>{welcome.greeting} {welcome.title}</h1>

      <hr/>

      <List />
    </div>
  );


const List = () => 
  (
    <ul>
      {list.map((item) => 
           (
           <li key={item.id}><span>{item.title}</span></li>
           )
        )}
    </ul>
  );


const Label = () => 
  (
    <div>
       <label htmlFor="firstname">Firstname: </label>
    </div>
   
  );


const InName = () => 
  (
    <div>
      <input type="text" id="firstname" />
    </div>
    
  );

export default App;