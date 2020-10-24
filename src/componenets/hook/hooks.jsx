import React, { useState, useEffect } from "react";

function Counter2() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `${name} is clickin ${count} times`;
    return () => console.log("clean up");
  }, [name]);

  return (
    <React.Fragment>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>sdjsdjs</button>
      <div>
        {name} is counting = {count}
      </div>
    </React.Fragment>
  );
}
export default Counter2;
