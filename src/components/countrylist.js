import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import TableData from './tabledata';
export const CountryList = () => {
    const [countries, setCountries] = React.useState([]);
    const [search, setSearch] = React.useState("");

    useEffect(
        function () {
            axios.get('https://disease.sh/v3/covid-19/countries/')
                .then(response => { setCountries(response.data) })
        }, []
    );
    function searchCountry(e){
        
        return countries.filter((country) => {
            return country.country.toLowerCase().indexOf(search)>-1;
        });
    }
    return (
        <div>
            <input type="text" value={search} placeholder={"Search Country"} onChange={(e) => setSearch(e.target.value)} />
            <br></br>
            <TableData countries={searchCountry(countries)} />
        </div>
    )
}

