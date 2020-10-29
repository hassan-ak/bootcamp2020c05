//Assignment
import React, { useState } from 'react';
import './App.css';
import { Parent1 } from './components1/Parent1';
import { Parent2 } from './components2/Parent2';
import { Parent3 } from './components3/Parent3';
import DataContext from './context/Data';
import CounterContext from './context/Counter';
import { Parent } from './components4/Parent';

function App() {
  const [name, setName] = useState("Hassan Ali Khan")
  const [age, setAge] = useState(28);
  const [city, setCity] = useState("Lahore");

let counterValue = useState(50);

  return (
    <div>
      <div className="container1">
        <h1>Context API</h1>
        <div className="one">
          <div className="without">
            <h3>Without Using context Api</h3>
            <Parent1 name = {name} age = {age} city = {city}></Parent1>
          </div>
          <DataContext.Provider value={[{name},{age},{city}]}>
            <div className="with">
              <h3>With Context Api</h3>
              <Parent2></Parent2>
            </div>
          </DataContext.Provider>
          <div className="button">
            <button onClick = {()=> {setName("Zubair Hafeez"); setAge(24); setCity("Faisalabad")}}>
              Update User
            </button>
            <button onClick = {()=> {setName("Hassan Ali Khan"); setAge(28); setCity("Lahore")}}>
              Reset User
            </button>
          </div>
        </div>
        <div className="two">
          <CounterContext.Provider value={counterValue}>
            <div className="cu">
              <h3>Contest Api + UseState</h3>
              <Parent3></Parent3>
            </div>
          </CounterContext.Provider>
        </div>
      </div>
      <div className="container2">
        <h1>UseReducer</h1>
        <div className="three rd">
          <h4>Counter using Reducer</h4>
          <Parent></Parent>
        </div>
      </div>
    </div>
  );
}

export default App;

// // Step04
// import React, { useState } from 'react';
// import './App.css';
// import Parent from './Parent';
// import ValueContext from './ValueContext';

// function App() {
//   //let [number, setNumber] = useState(45);
//   let value = useState(48);
//   return (
//     <ValueContext.Provider value={value}>
//       <div >
//         Hello World
//         <Parent></Parent>
//       </div>
//     </ValueContext.Provider>
    
//   );
// }

// export default App;

// // // Step03
// // import React, { useState } from 'react';
// // import './App.css';
// // import Parent from './Parent';
// // import ValueContext from './ValueContext';

// // function App() {
// //   //let [number, setNumber] = useState(45);
// //   let value = useState(48);
// //   return (
// //     <ValueContext.Provider value={value}>
// //       <div >
// //         Hello World
// //         <Parent></Parent>
// //       </div>
// //     </ValueContext.Provider>
    
// //   );
// // }

// // export default App;

// // // // Step 02
// // // import React from 'react';
// // // import './App.css';
// // // import Parent from './Parent';
// // // import ValueContext from './ValueContext';

// // // function App() {
// // //   let value = 78;
// // //   return (
// // //     <ValueContext.Provider value={value}>
// // //       <div >
// // //         Hello World
// // //         <Parent></Parent>
// // //       </div>
// // //     </ValueContext.Provider>
    
// // //   );
// // // }

// // // export default App;

// // // // // Step 01
// // // // import React, { useState } from 'react';
// // // // import './App.css';
// // // // import Parent from './Parent';
// // // // function App() {
// // // //   let [number, setNumber] = useState(45);
// // // //   return (
// // // //     <div >
// // // //       Hello World
// // // //       <Parent num={number}></Parent>
// // // //       <button onClick={()=>{ setNumber(++number) }} >Update Number</button>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;
