import React, { useState, useEffect, useCallback } from "react";
import Review from "./Review";
import data from "./data";

function App() {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  const changePerson = useCallback(
    (direction) => {
      setIndex(
        (index + direction + people.length) % people.length
      );
    },
    [index, people]
  );

  useEffect(() => {
    let interval = setInterval(() => changePerson(1), 5000);

    return () => {
      clearInterval(interval);
    };
  }, [changePerson]);

  return (
    <Review person={people[index]} changePerson={changePerson} />
  );
}

export default App;
