// import React, { useState, useEffect } from "react";
import React, { useReducer } from "react";

export default function App() {
  // const [checked, setChecked] = useState(false);

  // function toggle() {
  //   setChecked((checkedddd) => !checked);
  // }
  const [checked, toggle] = useReducer(
    (checked) => !checked,    
    false
  );


  const [,,,light] = ["boots", "tent", "jacket", "headlamp"];
  console.log(light);


  return (
    <div className="App">
      <input 
      type="checkbox" 
      value={checked}
      onChange={toggle} 
      />

      <p>{checked ? "checked" : "not checked"}</p>
    </div>
  );
}

// simple "reducer" definition: takes in a current state and returns a new state
