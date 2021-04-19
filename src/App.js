import './App.css';
import React from 'react';
import Count from './03/Counter2';
import ScrollSpy from './03/ScrollSpy';
import Count3 from './03/Counter3';
import Input from './03/Input';
/* function App() {
  return (
    <div>
      <LifecycleExample />
    </div>
  );
 }*/
 class App extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       count : 1
     };
     this.increaseCount = this.increaseCount.bind(this); 
   }
   increaseCount(){
     this.setState(({count}) => ({
       count : count + 1
     }));
   }
   render(){
     return(
       <div>
          <Count count={this.state.count} onAdd={this.increaseCount} />
          <ScrollSpy />
          <Count3 />
          <Input name='testInput' type="text" value="abcd" errorMessage='error occured' label='InputLabel' autoFocus={true} onChange={this.increaseCount}></Input>
       </div>
     );
   }
 }

export default App;