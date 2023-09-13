import React, {useState} from "react";
import './App.css'

const Home = () => {
  const [name, setName] = useState("");
  const [item, setItem] = useState([]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const addList = () => {
    if (name === "") return;
    setItem((b) => {
      return [...b, name];
    });
    setName("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addList();
    }
  };

  const deleteItem = (index) => {
    setItem((prevItems) => {
      const updatedItems = prevItems.filter((a, i) => i !== index);
      return updatedItems;
    });
  };

  return (
    <div className="wrapper">
      <div className="container">
        <h1>Items To Buy</h1>
        <div>
          <input
            type="text"
            placeholder="Add a new item"
            onChange={handleChange}
            value={name}
            onKeyDown={handleKeyPress}
          />
          <button type = "submit" onClick={addList}>Add</button>
        </div>

        <ul>
          {item.map((a, index) => {
            return (
              <li key={index}>
                <span>{a}</span>
                <button
                  onClick={() => deleteItem(index)}
                  className="btn"
                >
                  &times;
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;