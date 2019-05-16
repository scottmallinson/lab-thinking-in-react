import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = { 
    search: '',
    inStock: true
  }

  handleChange(event) {
    event.preventDefault();
    // All our inputs have same `name` as the `state` property name.
    let { name, value } = event.target;
    this.setState( { [name]: value } );
    this.props.searchQuery(this.state);
  }

  handleCheckbox = () =>{
    this.setState({
        inStock: !this.state.inStock
      })
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">Search</label>
          <input type="text" name="search" value={this.state.search} onChange={ this.handleChange} />
          <input type="checkbox" name="inStock" checked={this.state.inStock} value={this.state.inStock} onChange={this.handleCheckbox} />
          <label htmlFor="inStock">Only show products in stock</label>
        </form>
      </div>
    )
  }
}
