import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class CarsTable extends Component {
    state={
        cars:[
            {id: 1, name: 'Gentra', year: 2020, pricing: '$17000', color: 'white', position: 2},
            {id: 2, name: 'Malibu', year: 2019, pricing: '$18000', color: 'black', position: 1},
            {id: 3, name: 'Cobalt', year: 2021, pricing: '$20000', color: 'black', position: 3},
            {id: 4, name: 'Onix', year: 2023, pricing: '$25000', color: 'white', position: 1},
        ]
    }
  render() {
    const {cars} = this.state
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-10 offset-1">
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <th>T/R</th>
                                <th>Car Name</th>
                                <th>Year</th>
                                <th>Pricing</th>
                                <th>Color</th>
                                <th>Position</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cars.map((item,index)=>{
                                    return <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.year}</td>
                                        <td>{item.pricing}</td>
                                        <td>{item.color}</td>
                                        <td>{item.position}</td>
                                        <td>
                                            <Link to={`/login/cars/opencar/${item.id}`} className='btn btn-info'>Open</Link>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
  }
}

