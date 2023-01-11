import React, { useState } from "react";
import { Box, FormControl, InputLabel, InputAdornment, OutlinedInput, Button } from "@mui/material";
import { addPeople } from "./PeopleHelper";
import { useMutation } from 'react-query'


export const PeopleForm = () => {
    const [formState, setFormState] = useState()

    const mutation = useMutation(event => {
        event.preventDefault()
        return addPeople()
    })


    return (
        <>
            <Box sx={{ marginTop: 2, width: 500 }}>
                <FormControl fullWidth sx={{ marginBottom: 1 }} onSubmit={mutation.mutate}>
                    <InputLabel htmlFor="outlined-adornment-amount">Name</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">☺️</InputAdornment>}
                        label="Name"
                        onChange={(event) => { setFormState(event.target.value) }}
                    />
                </FormControl>
                <Button type="submit" variant="outlined" onClick={() => addPeople(formState)}>Submit</Button>
            </Box>
        </>
    )
}