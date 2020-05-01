import React, { Component } from 'react';

import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'

import { fetchData } from './api'

import styles from './App.module.css'
import coronaImage from './images/image.png'

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
    const { data, country } = this.state
    return (
      <div className={styles.container} >
        <img src={coronaImage} alt="Corona Image" />
        <Cards data={data} country={country} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
