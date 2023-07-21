import * as React from 'react';

// define variable outside function to avoid re-defining it on every function call
const welcome = {
  title: 'Phil',
  greeting: 'Hey'
};



const App = () => {
  console.log("App renders");
  const [name, changeName] = React.useState("");
  const stories = [
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
  const handleNameChange = (event) => {
    changeName(event.target.value);
  }

 return (
    <div>
      <InName name={name} changeName={changeName}/>
      <h1>{welcome.greeting} {welcome.title}</h1>

      <hr/>

      <List list={stories} name={name}/>
    </div>
  );
 }

const List = (props) => {
  console.log("List renders");
  return (
    <ul>
      {props.list.filter((item) => (
        item.author == props.name
      ))
      .map((item) => 
           (
           <Item key={item.id} item={item} />
           )
        )}
    </ul>
  );
           }

const Item = (props) => {
  console.log("Item renders");
  return (
    <li>
      <span>{props.item.title}</span>
      <span>{props.item.author}</span>
    </li>
  );
}

const InName = (props) => {
  console.log("InName renders");
  return (
    <div>
      <label htmlFor="firstname">Firstname: </label>
      <input type="text" id="firstname" onChange={props.changeName} />
      <p>My name is {props.name}</p>
    </div>
    
  );
  }

export default App;