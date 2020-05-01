import React, { useEffect, useState } from 'react'
import { fetchDailyData } from '../../api/index'
import { Line } from 'react-chartjs-2'

import styles from './Chart.module.css'

export default function Chart() {

    const [dailyData, setdailyData] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setdailyData(await fetchDailyData())
        }
        fetchAPI();
    }, [])

    const lineChart = (
        dailyData.length ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: "Infected",
                        borderColor: '#3333ff'
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: "Deaths",
                        borderColor: 'red'
                    }]
                }}
            />) : null
    )

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}
