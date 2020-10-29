// Step04
import React from 'react';
import Child from './Child'
import Child2 from './Child2';

function Parent() {
  return (
    <div >
      Parent
      <Child></Child>
      <Child2></Child2>
    </div>
  );
}

export default Parent;

// // Step03
// import React from 'react';
// import Child from './Child'

// function Parent() {
//   return (
//     <div >
//       Parent
//       <Child></Child>
//     </div>
//   );
// }

// export default Parent;

// // //Step 02
// // import React from 'react';
// // import Child from './Child'

// // function Parent() {
// //   return (
// //     <div >
// //       Parent
// //       <Child></Child>
// //     </div>
// //   );
// // }

// // export default Parent;

// // // // Step01
// // // import React from 'react';
// // // import Child from './Child'

// // // function Parent(props) {
// // //   return (
// // //     <div >
// // //       Parent
// // //       <Child num={props.num}></Child>
// // //     </div>
// // //   );
// // // }

// // // export default Parent;