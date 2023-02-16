import React, { useEffect, useState } from "react";
import { Card } from "./Card";

export const Home = () => {
  const [eachItem, setEachItem] = useState();
  const [data, setData] = useState([]);

  const handleData = (e) => {
    const targetName = e.target.name;
    e.preventDefault();

    switch (targetName) {
      case "image":
        setEachItem({
          ...eachItem,
          image: URL.createObjectURL(e.target.files[0]),
        });
        break;
      case "name":
        setEachItem({ ...eachItem, name: e.target.value });
        break;
      case "genre":
        setEachItem({ ...eachItem, genre: e.target.value });
        break;
      case "studio":
        setEachItem({ ...eachItem, studio: e.target.value });
        break;
      case "produced":
        setEachItem({ ...eachItem, produced: e.target.value });
        break;
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setData([...data, eachItem]);
    localStorage.setItem("data", JSON.stringify(data));
  };
 
  return (
    <>
      <div className="container" style={{ maxWidth: "500px" }}>
        <form action="" className="d-flex flex-column">
          <input
            type="file"
            placeholder="choose image"
            name="image"
            accept="jpg/jpeg/png"
            onChange={handleData}
          />
          <input
            type="text"
            name="name"
            placeholder="title"
            onChange={handleData}
          />
          <input
            type="text"
            name="genre"
            placeholder="genre"
            onChange={handleData}
          />
          <input
            type="text"
            name="studio"
            placeholder="studio"
            onChange={handleData}
          />
          <input
            type="text"
            name="produced"
            placeholder="producer"
            onChange={handleData}
          />
          <button type="submit" className="btn btn-primary" onClick={handleAdd}>
            Submit
          </button>
        </form>
      </div>
      <div className="main">
        {data.map((each) => {
          return (
            <>
              <Card data={each} />
            </>
          );
        })}
      </div>
    </>
  );
};
