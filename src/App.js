import "./App.css";
import React, { useState, useEffect } from "react";
import ListComponent from "./Components/ListComponent";
import { Form, Button } from "react-bootstrap";
function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [inTxt, setInTxt] = useState("");

  // useEffect(() => {
  //   fetch(`http://api.github.com/users${search}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
       
  //     });
  // }, [search]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(search)
    fetch(`http://api.github.com/users${search}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
       
      });
    }, 3000)

    return () => clearTimeout(delayDebounceFn)
  }, [search])


  console.log("ss", search);
  // const handleSearch = () => {
  //   setSearch(inTxt);
  // };

  return (
    <div className="App">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Search</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search"
          // onChange={(e) => setInTxt(`/${e.target.value}`)}
          onChange={(e) => setSearch(`/${e.target.value}`)}
        />
      </Form.Group>
      {/* <Button onClick={handleSearch} variant="primary" type="submit">
        Search
      </Button> */}

      <ListComponent data={data} />
    </div>
  );
}

export default App;
