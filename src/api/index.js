import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    let countryURL = URL;

    if (country) {
        countryURL = `${URL}/countries/${country}`
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(countryURL)
        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
    }
    catch (err) {

    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${URL}/daily`)

        const modifiedData = data.map(d => ({
            confirmed: d.confirmed.total,
            deaths: d.deaths.total,
            date: d.confirmed.reportDate
        }))
        return modifiedData
    }
    catch (err) {

    }
}


export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${URL}/countries`)
        return countries.map(country => country.name)
    }
    catch (err) {

    }
}