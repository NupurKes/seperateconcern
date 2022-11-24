import "./App.css";
import React ,{ useState , useEffect } from 'react';

function App() {
  const [color, setColor] = useState(
    JSON.parse(sessionStorage.getItem('color')) || "blue");
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem('count')) || 0);
 
      console.log(color);
      console.log(count);

      useEffect(() => {
  sessionStorage.setItem('color', JSON.stringify(color));
  localStorage.setItem('count', JSON.stringify(count));
  
  }, [color, count]);


  return (<div>
  {/* This component has two children that display a message and a clock.
  It also has a button that counts clicks and toggles style color. */}
  <DisplayMessage color={color} />
  <Clock />
  <CounterDisplay count={count} />
  <UserActions 
  setColor={setColor} 
  setCount={setCount} 
  count={count} 
  color={color}/>
  </div>
  );
  }


  

  function CounterDisplay(props) {
    return <p>{props.count}</p>;
    }

  function UserActions(props) {
    const handleOnClick = () => {
      props.setColor(toggle(props.color));
      props.setCount(props.count+1)};
    return <button onClick={handleOnClick}>
    Change color React </button>;
    }

  function toggle(color){
      if(color=== "blue"){
          return "red";
      }
      else if(color=== "red"){
          return "green";            
      }else if(color=== "green"){
          return "blue";
      }
  }

  
  //function with props
  function DisplayMessage(props) {
  return <h1 style={{color: props.color}}>Hello React World</h1>;
  }

  //self contained clock element
   function Clock() {
    const [time, setTime] = React.useState(
      new Date().toLocaleTimeString());
      useEffect(() => {
      const interval = setInterval(() =>
      setTime(new Date().toLocaleTimeString()), 2000);
      return () => {clearInterval(interval);}
      }, [time]);
      return <p>React Clock: {time} </p>
     }
  
export default App;
