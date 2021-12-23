import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/esm/Table';

export const CountrywiseData = () => {
    const [countries, setCountries] = React.useState([]);
    const [country, setCountry] = React.useState([]);

    useEffect(
        function () {
            axios.get('https://disease.sh/v3/covid-19/countries/')
                .then(response => { setCountries(response.data) })
        }, []
    );
    const onddlchange = (e) => {
        axios.get('https://disease.sh/v3/covid-19/countries/' + e.target.value).then
            (response => { setCountry(response.data) })
    }

    return (
        <div>
            <select onChange={onddlchange}>
                <option>Select Country</option>
                {countries.map((country, index) => <option key={index} value={country.country}>{country.country}</option>)}
            </select>
            <br></br>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>{country.country}</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>Total Cases</td>
                        <td>{country.cases}</td>
                    </tr>
                    <tr>
                        <td>Total Deaths</td>
                        <td>{country.deaths}</td>
                    </tr>
                    <tr>
                        <td>Total Recovered</td>
                        <td>{country.recovered}</td>
                    </tr>
                    <tr>
                        <td>Total Active</td>
                        <td>{country.active}</td>
                    </tr>
                    <tr>
                        <td>Total Critical</td>
                        <td>{country.critical}</td>
                    </tr>
                    <tr>
                        <td>Total Today Cases</td>
                        <td>{country.todayCases}</td>
                    </tr>
                    <tr>
                        <td>Total Today Deaths</td>
                        <td>{country.todayDeaths}</td>
                    </tr>
                    <tr>
                        <td>Total Tests</td>
                        <td>{country.tests}</td>
                    </tr>
                    <tr>
                        <td>Total Population</td>
                        <td>{country.population}</td>
                    </tr>
                    <tr>
                        <td>Total Cases Per Million</td>
                        <td>{country.casesPerOneMillion}</td>
                    </tr>
                    <tr>
                        <td>Total Deaths Per Million</td>
                        <td>{country.deathsPerOneMillion}</td>
                    </tr>
                    <tr>
                        <td>Total Tests Per Million</td>
                        <td>{country.testsPerOneMillion}</td>
                    </tr>
                    <tr>
                        <td>Total Population</td>
                        <td>{country.population}</td>
                    </tr>

                </tbody>
            </Table>
        </div>
    )
}
