import { useState } from "react";
import "./App.css";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <>
      <h1>Birthday Reminder App</h1>
      <main>
        <section className="container">
          <h3>{people.length} Birthday Today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>Clear All</button>
        </section>
      </main>
    </>
  );
}

export default App;
