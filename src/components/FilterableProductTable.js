import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <h1>Filterable Product Table</h1>
        <SearchBar />
        <ProductTable />
      </div>
    )
  }
}
