import * as React from 'react';

// define variable outside function to avoid re-defining it on every function call
const welcome = {
  title: 'Phil',
  greeting: 'Hey'
};



const App = () => {
  console.log("App renders");
  const [name, changeName] = React.useState(localStorage.getItem('name') || "hi");
  
  React.useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  const handleNameChange = (event) => {
    changeName(event.target.value);
  }

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
  

  

 return (
    <div>
      <InName name={name} changeName={handleNameChange}/>
      <h1>{welcome.greeting} {welcome.title}</h1>

      <hr/>

      <List list={stories} name={name}/>
      <CacheButton/>
    </div>
  );
 }

const List = ({list, name}) => {
  console.log("List renders");
  return (
    <ul>
      {list.filter((item) => (
        item.author.toLowerCase().includes(name.toLowerCase())
      ))
      .map((item) => 
           (
           <Item key={item.id} item={item} />
           )
        )}
    </ul>
  );
           }

const Item = ({item}) => {
  console.log("Item renders");
  return (
    <li>
      <span>{item.title}</span>
      <span>{item.author}</span>
    </li>
  );
}

const InName = ({name, changeName}) => {
  console.log("InName renders");
  
  return (
    <div>
      <label htmlFor="firstname">Firstname: </label>
      <input type="text" id="firstname" value={name} onChange={changeName} />
      <p>My name is {name}</p>
    </div>
    
  );
  }

const CacheButton = () => {
  let root = document.getElementById('root');
  function clearCache() {
    root.innerHTML = "buttonclicked";
    windows.location.reload(true); 
  }
  
  return (
    <button onClick={clearCache}>Clear Cache</button>
  )
}

export default App;