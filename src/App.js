// // Aufgabe 1

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//Aufgabe 2
import React from 'react';
import UsernamePrinter from './UsernamePrinter';

function App() {
  return (
    <div>
      <h1>React Testing Example</h1>
      <UsernamePrinter />
    </div>
  );
}

export default App;
