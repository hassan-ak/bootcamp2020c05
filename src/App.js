// Step 02
import React from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {
  let value = 78;
  return (
    <ValueContext.Provider value={value}>
      <div >
        Hello World
        <Parent></Parent>
      </div>
    </ValueContext.Provider>
    
  );
}

export default App;

// // Step 01
// import React, { useState } from 'react';
// import './App.css';
// import Parent from './Parent';
// function App() {
//   let [number, setNumber] = useState(45);
//   return (
//     <div >
//       Hello World
//       <Parent num={number}></Parent>
//       <button onClick={()=>{ setNumber(++number) }} >Update Number</button>
//     </div>
//   );
// }

// export default App;
