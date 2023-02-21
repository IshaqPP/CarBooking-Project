import AdminHeader from "../Header/Admin_Header";
import React, { useState, useEffect } from "react";
import axios from 'axios';

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBTable,
    MDBTableHead,
    MDBTableBody
}
    from 'mdb-react-ui-kit';
const UserOrderDetails = () => {
    const [BookData, SetBookData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/BookData')
            .then(response => {
                SetBookData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    });
    return (

        < div style={{ minHeight: "100%" }} >
            <AdminHeader />
            <MDBContainer fluid className='bg-dark ' >
                <h1 className="pt-3 " style={{ textAlign: "center" }}>Order Details</h1>
                < MDBRow className='d-flex justify-content-center ' style={{ paddingTop: "20px", paddingBottom: "145px" }}>
                    <MDBCol>
                        <MDBTable>
                            <MDBTableHead className="text-white">
                                <tr>
                                    <th scope='col'>Customer Name</th>
                                    <th scope='col'>Car Name</th>
                                    <th scope='col'>BRAND</th>
                                    <th scope='col'>SEGMENT</th>
                                    <th scope='col'>DATE</th>
                                    <th scope='col'>LOCATION</th>
                                    <th scope='col'>DELETE</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody className="text-white">
                                {BookData.map(item => (
                                    <tr key={item.id}>
                                        <td>
                                            <p className='fw-normal mb-1'>{item.name}</p>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>{item.name}</p>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>{item.name}</p>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>{item.name}</p>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>{item.Date}</p>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>{item.Location}</p>
                                        </td>

                                        <td>
                                            <p className='fw-normal mb-1'>{ }</p>
                                        </td>

                                    </tr>

                                ))}
                                <tr>
                                    <td></td><td> </td><td></td><td></td><td></td><td></td><td></td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </MDBCol>
                </MDBRow >
            </MDBContainer >
        </ div >
    )
}

export default UserOrderDetails
