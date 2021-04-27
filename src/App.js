import './App.css';
import React from 'react';
import Count from './03/Counter2';
import ScrollSpy from './03/ScrollSpy';
import Count3 from './03/Counter3';
import './materialize-src/sass/materialize.scss';
/* function App() {
  return (
    <div>
      <LifecycleExample />
    </div>
  );
 }*/
 class App extends React.Component{
   /*
   constructor(props){
     super(props);
     this.state = {
       count : 1
     };
     this.increaseCount = this.increaseCount.bind(this); 
   }
     */
   /*
   increaseCount(){
     this.setState(({count}) => ({
       count : count + 1
     }));
   }
   */
   render(){
     return(
       <div>
          {/* <Count count={this.state.count} onAdd={this.increaseCount} />
          <ScrollSpy />
          <Count3 /> */}
          <nav>
            <div className="nav-wrapper">
              <div>material Design</div>
            </div>
          </nav>
          <h1>마테리얼 디자인</h1>
       </div>
     );
   }
 }

export default App;