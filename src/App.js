import React, { Component } from 'react';
import './App.css';
import './data/data.json';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar />
        <ProductTable />
      </div>
    );
  }
}