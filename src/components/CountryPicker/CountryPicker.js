import React from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
export default function CountryPicker() {
    return (
        <FormControl>
            <NativeSelect>
                <option value="global">Global</option>
            </NativeSelect>
        </FormControl>
    )
}
