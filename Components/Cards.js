import React, { useState } from "react";
import "./Card.css";
import CardList from "./CardList";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./Cardsdata";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";


const Cards = (props) => {
  const [data, setData] = useState(Cardsdata);
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e));


  };

  return (
    <div className="row d-flex justify-content-center align-items-center">
      {data.map((elment, id) => {
        return (
          <>
            <Card
              style={{ width: "30rem", border: "none" }}
              className="mx-2 mt-4 cards_style"
            >
              <Card.Img
                variant="top"
                src={elment.imgdata}
                style={{ height: "25rem" }}
                className="mt-3"
              />
              <Card.Body>
                <Card.Title>{elment.rname}</Card.Title>
                <Card.Text>{elment.address}</Card.Text>
                <Card.Text>{elment.details}</Card.Text>
                <Card.Text>Price: ₹{elment.price}</Card.Text>
                <div className="button_div d-flex justify-content-center ">
                  <Button
                    variant="primary"
                    className="col-lg-12"
                    onClick={() => send(elment)}
                  >
                    Add to cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default Cards;
