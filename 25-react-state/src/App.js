import React, {useState} from 'react';
import LightSwitch from './components/LightSwitch';
import LightStatusReading from './components/LightStatusReading';
import Counter from './components/Counter';
import Reset from './components/Reset';
import './App.css';


function App() {
  let [ light, setLight ] = useState( true );
  const houseLight = () => {
    setLight( light ? false : true )
  };
  let [ count, setCount ] = useState( 0 );
  const onClickCount = () => {
    count = count + 1;
    setCount(count)
  }
 
  const resetToZero = () => {
    setCount(0)
  }
  return (
    <div className='App'>
      <LightSwitch 
          lightSwitchStatus = {houseLight}
          numberOfClickCount = {onClickCount} 
      />
      <LightStatusReading lightStatus = {light} />
      <Counter clickCount = {`The client has clicked the switch ${count} times.`} />
      <Reset reset = {resetToZero} />
    </div>
  )
}
export default App;