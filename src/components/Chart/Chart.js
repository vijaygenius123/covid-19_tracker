import React, { useEffect, useState } from 'react'
import { fetchDailyData } from '../../api/index'
export default function Chart() {

    useEffect(() => {
        fetchDailyData();
    }, [])
    return (
        <div>
            <h1>Chart</h1>
        </div>
    )
}
