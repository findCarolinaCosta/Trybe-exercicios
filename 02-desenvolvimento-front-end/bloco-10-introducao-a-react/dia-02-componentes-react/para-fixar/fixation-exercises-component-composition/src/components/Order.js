import { Component } from 'react';

class Order extends Component {
  render() {
    const { user, product, price } = this.props.order;

    return (
      <div className="order">
        <hr />
        <p> {user} bought {product} for {price.value} {price.currency} </p>
        <hr />
      </div>
    );
  }
}

export default Order;