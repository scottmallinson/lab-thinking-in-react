import React, { Component } from 'react'
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    return (
      <div>
        <h2>Product Table</h2>
        <ProductRow />
      </div>
    )
  }
}
