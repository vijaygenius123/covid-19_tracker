import React, { Component } from 'react';

import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'

import { fetchData } from './api'

import styles from './App.module.css'

class App extends Component {

  state = {
    data: {}
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data })
  }


  render() {
    const { data } = this.state
    return (
      <div className={styles.container} >
        <Cards data={data} />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
