import React from 'react'
import spiner from './Spinner-1s-200px.svg'

function Preloader() {
    return (
        <img width={'300px'} height = {'300px'} src={spiner} alt="spiner" /> 
    )
}

export default Preloader
