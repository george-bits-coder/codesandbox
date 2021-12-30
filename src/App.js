import { useState } from "react";
import "./styles.css";



 function App() {

  const [count,setCount]=useState(0);

  const addOne=(value)=>{

    setCount(count+value);
  }


  return (
    <div className="App">
      <h1>Counter {count}</h1>
     
     
  <button onClick={()=>addOne(1)}>Increase</button>
  {"     "}
  <button onClick={()=>addOne(-1)}>Decrease</button>

{"     "}

  <button onClick={()=>addOne(count)}>Double</button>  
    </div>
  );
}



export default App;