import React from 'react'
import { Table } from 'react-bootstrap';

export default function TableData({ countries }) {

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Total Case</th>
                    <th>New Case</th>
                    <th>Total Death</th>
                    <th>Total Recover</th>
                    <th>Death (Today)</th>

                    <th>Recover (Today)</th>
                </tr>

            </thead>
            <tbody>
                {countries.map(country => (
                    <tr key={country.country}>
                        <td>{country.country}</td>
                        <td>{country.cases}</td>
                        <td>{country.todayCases}</td>
                        <td>{country.deaths}</td>
                        <td>{country.recovered}</td>
                        <td>{country.todayDeaths}</td>
                        <td>{country.todayRecovered}</td>
                    </tr>
                ))}
            </tbody>

        </Table>
    )
}