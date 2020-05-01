import React, { Component } from 'react';

import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'

import { fetchData } from './api'

import styles from './App.module.css'

class App extends Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data })
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country })
  }


  render() {
    const { data } = this.state
    return (
      <div className={styles.container} >
        <Cards data={data} />
        <Chart />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
      </div>
    );
  }
}

export default App;
