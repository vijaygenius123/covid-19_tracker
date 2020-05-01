import React, { useEffect, useState } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { fetchCountries } from '../../api'

import styles from './CountryPicker.module.css'

export default function CountryPicker() {
    const [countries, setcountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setcountries(await fetchCountries())
        }
        fetchAPI();
    }, [setcountries])
    return (
        <FormControl>
            <NativeSelect>
                <option value="global">Global</option>
                {
                    countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                    ))
                }
            </NativeSelect>
        </FormControl>
    )
}
