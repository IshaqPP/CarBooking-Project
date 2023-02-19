
import React, { useState, useEffect } from "react";
import {
    MDBTable,
    MDBTableHead,
    MDBTableBody
}
    from 'mdb-react-ui-kit';
const UserOrderDetails = () => {
    const [Students, SETstudent] = useState([
        { id: "", name: "", dob: "", cls: "", div: "", gender: "" }
    ])
    return (

        < div >
            <MDBTable>
                <MDBTableHead className="text-white">
                    <tr>
                        <th scope='col'>Customer Name</th>
                        <th scope='col'>Car Name</th>
                        <th scope='col'>BRAND</th>
                        <th scope='col'>SEGMENT</th>
                        <th scope='col'>LOCATION</th>
                        <th scope='col'>DATE</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody className="text-white">
                    {Students.map(item => (
                        <tr key={item.id}>
                            <td >
                                <div className='d-flex align-items-center'>
                                    <p className='fw-bold mb-1'>{item.id}</p>
                                </div>
                            </td>
                            <td>
                                <p className='fw-normal mb-1'>{item.name}</p>
                            </td>
                            <td>
                                <p className='fw-normal mb-1'>{item.dob}</p>
                            </td>
                            <td>
                                <p className='fw-normal mb-1'>{item.studenClass}</p>
                            </td>
                            <td>
                                <p className='fw-normal mb-1'>{item.division}</p>
                            </td>

                        </tr>
                    ))}
                </MDBTableBody>
            </MDBTable>
        </ div>
    )
}

export default UserOrderDetails
