import React, { Component } from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import { ProductConsumer } from "../context";

export default class Desktop extends Component {
  state = {
    property: data[0]
  };

  upSlide = () => {
    let newIndex = this.state.property.index + 1;
    if (newIndex >= 7) {
      return (newIndex = 0);
    }
    this.setState(() => {
      return { property: data[newIndex] };
    });
  };

  downSlide = () => {
    let newIndex = this.state.property.index - 1;
    if (newIndex < 0) {
      return (newIndex = 0);
    }
    this.setState(() => {
      return { property: data[newIndex] };
    });
  };
  render() {
    const { property } = this.state;
    return (
      <ProductConsumer>
        {value => {
          return (
            <section className="desktop">
              <div className="container">
                <figure className="desktop-large">
                  <Link to="/detail">
                    <img src={value.detailProduct.img} alt="" />
                  </Link>
                </figure>

                <div className="desktop-slider">
                  {value.products.map(product => {
                    return (
                      <figure
                        className="small"
                        style={{
                          transform: `translateY(-${property.index *
                            (720 / data.length)}%)`
                        }}
                        onClick={() => {
                          value.handleDetail(product.id);
                        }}
                        key={product.id}
                      >
                        <Link to="/detail">
                          <img src={product.img} key={product.id} alt="" />
                        </Link>
                      </figure>
                    );
                  })}
                  <div className="buttons">
                    <button className="btn-up" onClick={() => this.upSlide()}>
                      <i className="fas fa-chevron-up"></i>
                    </button>

                    <button
                      className="btn-down"
                      onClick={() => this.downSlide()}
                    >
                      <i className="fas fa-chevron-down"></i>
                    </button>
                  </div>
                </div>
              </div>

              <Link className="btn-primary" to="/mobile">
                Show Mobile
              </Link>
            </section>
          );
        }}
      </ProductConsumer>
    );
  }
}
