import React from "react";
import { Card } from "react-bootstrap";
import ModalComponent from "./ModalComponent";
const ItemComponent = ({ name, img, url }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Card className="cardContainer">
        <Card.Img className="dpImg" variant="top" src={img} />
        <Card.Body>
          <Card.Title onClick={() => setModalShow(true)} style={{cursor:'pointer'}}>{name}</Card.Title>
          <Card.Text>{url}</Card.Text>
        </Card.Body>
      </Card>
      <ModalComponent userName={name} show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default ItemComponent;
