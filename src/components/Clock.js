import React, { useEffect } from 'react';

//self contained clock element
export function Clock() {
  const [time, setTime] = React.useState(
    new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date().toLocaleTimeString()), 2000);
    return () => { clearInterval(interval); };
  }, [time]);
  return <p>React Clock: {time} </p>;
}
