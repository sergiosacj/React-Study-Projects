import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState([
    "all",
    ...new Set(items.map((item) => item.category)),
  ]);

  const filterItems = (category) => {
    category === "all"
      ? setMenuItems(items)
      : setMenuItems(
          items.filter((item) => item.category === category)
        );
  };

  return (
    <>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </>
  );
}

export default App;
