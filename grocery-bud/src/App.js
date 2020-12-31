import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  return list ? JSON.parse(list) : [];
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setAlert({
        show: true,
        msg: "please enter value",
        type: "danger",
      });
    } else if (isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setEditID(null);
      setName("");
      setIsEditing(false);
    } else {
      setAlert({
        show: true,
        msg: "item added to the list",
        type: "success",
      });
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
    }
  };

  const removeItem = (id) => {
    setAlert({
      show: true,
      msg: "item removed",
      type: "danger",
    });
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const searchItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(searchItem.title);
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && (
          <Alert {...alert} setAlert={setAlert} list={list} />
        )}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="10x eggs"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List
            items={list}
            removeItem={removeItem}
            editItem={editItem}
          />
          <button
            className="clear-btn"
            onClick={() => {
              setAlert({
                show: true,
                msg: "list was deleted",
                type: "success",
              });
              setList([]);
            }}
          >
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
