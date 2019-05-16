import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: props.products.data,
      foundProducts: props.products.data
    }
  }

  searchHandler = (query) => {
    console.log(query);
    const foundProducts = this.state.products.filter(product => product.name.includes(query));
    this.setState({ foundProducts: foundProducts })
  }

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar searchQuery={this.searchHandler} />
        <ProductTable products={this.state.foundProducts} />
      </div>
    )
  }
}
