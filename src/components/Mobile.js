import React, { Component } from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import { ProductConsumer } from "../context";
export default class Mobile extends Component {
  state = {
    property: data[0]
  };

  nextSlide = () => {
    let newIndex = this.state.property.index + 1;
    console.log(newIndex);
    if (newIndex >= 7) {
      return (newIndex = 0);
    }
    this.setState({
      property: data[newIndex]
    });
  };

  prevSlide = () => {
    let newIndex = this.state.property.index - 1;
    console.log(newIndex);
    if (newIndex < 0) {
      return (newIndex = 0);
    }
    this.setState({
      property: data[newIndex]
    });
  };

  render() {
    const { property } = this.state;
    return (
      <ProductConsumer>
        {value => {
          return (
            <div className="mobile">
              <nav className="nav">
                <i className="fas fa-bars"></i>
                <div className="nav-block">
                  <i className="fas fa-heart"></i>
                  <i className="fas fa-bell"></i>
                </div>
              </nav>
              <div className="slider" id="slider">
                <div
                  className="wrapper"
                  style={{
                    transform: `translateX(-${property.index *
                      (770 / data.length)}%)`
                  }}
                >
                  {value.products.map(product => {
                    return (
                      <div
                        onClick={() => {
                          value.handleDetail(product.id);
                        }}
                      >
                        <Link to="/details">
                          <img src={product.img} key={product.id} />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button className="left" onClick={() => this.nextSlide()}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="right" onClick={() => this.prevSlide()}>
                <i className="fas fa-chevron-right"></i>
              </button>

              <div className="mobile-block">
                <Link className="btn-primary" to="/">
                  Show Desktop
                </Link>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
