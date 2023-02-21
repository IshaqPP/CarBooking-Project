import React, { useState, useEffect } from "react";
import axios from 'axios';

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBTable,
    MDBTableHead,
    MDBTableBody
}
    from 'mdb-react-ui-kit';

const Car = () => {

    const [formData, setFormData] = useState({});

    const [Brand, SetBrand] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/Admin/Brand')
            .then(response => {
                SetBrand(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const [carData, SetcarData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/Admin/CarData')
            .then(response => {
                SetcarData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    });



    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("^^^^^");
        console.log(formData);

        axios.post('http://localhost:5000/Admin/Register', formData)
            .then(response => {
                window.alert("successfully added")

            })
            .catch(error => {
                console.error(error);
            });
    };


    return (
        <div style={{ minHeight: "100%" }} >
            <MDBContainer fluid className='bg-dark ' >
                < MDBRow className='d-flex justify-content-center ' style={{ paddingTop: "50px", paddingBottom: "145px" }}>
                    <MDBCol>
                        <MDBCard className='my-1 '>
                            <MDBRow className='g-0'>
                                <MDBCol md='12' className="d-none d-md-block">
                                    <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                                        <h3 className="mb-4 text-uppercase text-center font-weight-bold"> Car Registration Form </h3>
                                        <form onSubmit={handleSubmit}>
                                            <MDBRow>
                                                <MDBCol md='12'>
                                                    <MDBInput wrapperClass='mb-4' size='lg' id='form1' type='text' name="name" placeholder="Name of Car"
                                                        onChange={handleInputChange}
                                                        required />
                                                </MDBCol>
                                            </MDBRow>

                                            <div className='d-md-flex ustify-content-start align-items-center mt-2 mb-4'>
                                                <h6 className="font-weight-bold  " style={{ fontSize: '20px', marginRight: "35px" }}>Brand   </h6>
                                                <select name="Brand" onChange={handleInputChange}>
                                                    {Brand.map(item => (
                                                        <option key={item.id} value={item.name}>{item.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className='d-md-flex ustify-content-start align-items-center mt-2 mb-4'>
                                                <h6 className="font-weight-bold mt-1" style={{ fontSize: '20px', marginRight: "10px" }}>Segment  </h6>
                                                <select name="Segment" onChange={handleInputChange}>
                                                    <option value="A-Segment ">A-Segment </option>
                                                    <option value="B-Segment ">B-Segment </option>
                                                    <option value="C-Segment ">C-Segment </option>
                                                    <option value="D-Segment ">D-Segment </option>
                                                    <option value="E-Executive Segment ">E-Executive Segment</option>
                                                    <option value="M- Multipurpose cars ">M- Multipurpose cars </option>
                                                    <option value="J- Sports Utility Vehicles ">J- Sports Utility Vehicles </option>
                                                    <option value="Crossovers">Crossovers</option>
                                                </select>
                                            </div>

                                            <div className="d-flex justify-content-end pt-3">
                                                <MDBBtn color='warning' size='lg' type="submit" value="Register">Save</MDBBtn>
                                            </div>
                                        </form>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBTable>
                            <MDBTableHead className="text-white">
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>BRAND</th>
                                    <th scope='col'>SEGMENT</th>
                                    <th scope='col'>UPDATE</th>
                                    <th scope='col'>DELETE</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody className="text-white">
                                {carData.map(item => (
                                    <tr key={item.id}>
                                        <td>
                                            <p className='fw-normal mb-1'>{item.name}</p>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>{item.Brand}</p>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>{item.Segment}</p>
                                        </td>

                                        <td>
                                            <p className='fw-normal mb-1'>{ }</p>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>{ }</p>
                                        </td>
                                    </tr>

                                ))}
                                <tr>
                                    <td></td><td> </td><td></td><td></td><td></td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </MDBCol>
                </MDBRow >
            </MDBContainer >
        </div >
    )
}

export default Car
