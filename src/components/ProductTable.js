import React, { Component } from 'react'
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.products.map( (product, index) => <ProductRow key={index} {...product} /> )
            }
          </tbody>
        </table>
      </div>
    )
  }
}
