import './App.css';
import React from 'react';
import Todolist from './03/Todolist';
/* function App() {
  return (
    <div>
      <LifecycleExample />
    </div>
  );
 }*/
 class App extends React.Component{
   render(){
     return(
       <div>
         <Todolist />
       </div>
     );
   }
 }

export default App;