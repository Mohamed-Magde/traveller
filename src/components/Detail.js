import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default class Detail extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, img, index } = value.detailProduct;
          return (
            <div className="detail">
              <img src={img} alt="" />
              <Link className="btn-primary" to="/">
                back to Home
              </Link>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
