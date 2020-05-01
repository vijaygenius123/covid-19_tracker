import React, { useEffect, useState } from 'react'
import { fetchDailyData } from '../../api/index'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Chart.module.css'

export default function Chart({ data: { confirmed, recovered, deaths }, country }) {

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

    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ["Infected", "Recovered", "Deaths"],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)'
                        ],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` }
                }}
            />
        ) : null
    )

    return (
        <div className={styles.container}>

            {country ? barChart : lineChart}
        </div>
    )
}
