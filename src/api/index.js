import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(URL)
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