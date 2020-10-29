// Step03
import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child() {
  let value = useContext(ValueContext);
  let updateValue = value[1];
  return (
    <div >
      Child number {value[0]}
      <button onClick={()=> { updateValue(++value[0]) }}>Update value</button>
    </div>
  );
}

export default Child;

// //Step02
// import React, { useContext } from 'react';
// import ValueContext from './ValueContext';

// function Child() {
//   let value = useContext(ValueContext);
//   return (
//     <div >
//       Child number {value}
//     </div>
//   );
// }

// export default Child;

// // // Step01
// // import React from 'react';

// // function Child(props) {
// //   return (
// //     <div >
// //       Child number {props.num}
// //     </div>
// //   );
// // }

// // export default Child;