import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ModalComponent = (props) => {
  const username = props.userName;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log("ss", data);
      });
  }, [username]);
  return (
    <div>
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            User Detail
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div>
              <img
                width="200px"
                height="180px"
                src={data.avatar_url}
                alt="dp"
              />
              <h4>{data.name}</h4>
              <p>{data.location}</p>
              <h6>Followers</h6>
              <p>{data.followers}</p>
              <h6>Following</h6>
              <p>{data.following}</p>
            </div>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComponent;
