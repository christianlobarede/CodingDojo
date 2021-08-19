import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const int = setInterval(() => setTime(new Date().toLocaleString()), 1000);

    return function clearInt() {
      clearInterval(int);
    };
  }, []);

  return (
    <div className="item-1">
      <p>Current time: {time}</p>
    </div>
  );
};

export default Clock;
