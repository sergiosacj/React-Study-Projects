import React, { useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import { useFetch } from "./useFetch";
import { DataContext } from "./store";

function App() {
  const url = "https://course-api.com/react-tours-project";
  const [tours, setTours] = useState([]);
  const { loading, data } = useFetch(url, setTours);

  const removeTour = (id) => {
    setTours(() => tours.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <div className="underline"></div>
          <button className="btn" onClick={() => setTours(data)}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <DataContext.Provider value={{ removeTour }}>
      <main>
        <Tours tours={tours} />
      </main>
    </DataContext.Provider>
  );
}

export default App;
