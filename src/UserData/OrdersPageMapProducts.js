import React from "react";
import { Link } from "react-router-dom";

export default function OrderPageMapProduct(props) {
  console.log(props.all.url);
  console.log(props.all);

  return (
    <div className="orderPage">
      <img alt="some value" className="imageSizeOrder" src={props.all.url} />
      <div className="orderPageText">
        <div className="orderPageTextPosition">
          <Link to={`/orders/${props.all.id}`}>
            <h1>{props.all.ProductTitle}</h1>
          </Link>
          <h1>Price {props.all.Price}</h1>
        </div>
      </div>
    </div>
  );
}
