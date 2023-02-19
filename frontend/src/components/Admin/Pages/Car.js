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
    MDBRadio,
    MDBTable,
    MDBTableHead,
    MDBTableBody
}
    from 'mdb-react-ui-kit';

const Car = () => {
    const [formData, setFormData] = useState({
        name: "",
        dob: "",
        studenClass: "",
        division: "",
        gender: ""
    });

    const [loading, setLoading] = useState(false);

    const [Students, SETstudent] = useState([
        { id: "", name: "", dob: "", cls: "", div: "", gender: "" }
    ])

    const handleClear = () => {
        setFormData("");
    };

    const { name, dob, studenClass, division, gender } = formData;


    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8080/student', formData)
            .then(data => {
                handleClear();
                window.alert("successfully added")

                // console.log(data);
            })
        console.log(formData);
    };
    return (
        <div style={{ minHeight: "100%" }}>
            <MDBContainer fluid className='bg-dark ' >
                < MDBRow className='d-flex justify-content-center ' style={{ paddingTop: "50px", paddingBottom: "145px" }}>
                    <MDBCol>
                        <MDBCard className='my-1 '>
                            <MDBRow className='g-0'>
                                <MDBCol md='12' className="d-none d-md-block">
                                    <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                                        <h3 className="mb-4 text-uppercase text-center font-weight-bold"> Car Registration Form </h3>
                                        <form onSubmit={onSubmit}>
                                            <MDBRow>
                                                <MDBCol md='12'>
                                                    <MDBInput wrapperClass='mb-4' size='lg' id='form1' type='text' name="name" placeholder="Name of Car"
                                                        value={name}
                                                        onChange={onChange}
                                                        required />
                                                </MDBCol>
                                            </MDBRow>

                                            <div className='d-md-flex ustify-content-start align-items-center mt-2 mb-4'>
                                                <h6 className="font-weight-bold  " style={{ fontSize: '20px', marginRight: "35px" }}>Brand   </h6>
                                                <select defaultValue={"A"} name="division" value={division} onChange={onChange}>
                                                    <option value="A">A</option>
                                                    <option value="B">B</option>
                                                    <option value="C">C</option>
                                                </select>
                                            </div>
                                            <div className='d-md-flex ustify-content-start align-items-center mt-2 mb-4'>
                                                <h6 className="font-weight-bold mt-1" style={{ fontSize: '20px', marginRight: "10px" }}>Segment  </h6>
                                                <select defaultValue={"A"} name="division" value={division} onChange={onChange}>
                                                    <option value="A">A-Segment (Mini Hatchbacks)</option>
                                                    <option value="B">B-Segment (Small Hatchbacks)</option>
                                                    <option value="C">C-Segment (Small Sedans or family cars)</option>
                                                    <option value="A">D-Segment (Mid-Sized Family cars or Sedans)</option>
                                                    <option value="A">E-Executive Segment (Executive Luxury Cars)</option>
                                                    <option value="A">M- Multipurpose cars (MPVs)</option>
                                                    <option value="A">J- Sports Utility Vehicles (SUVs)</option>
                                                    <option value="A">Crossovers</option>
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
                    </MDBCol>
                </MDBRow >
            </MDBContainer >
        </div >
    )
}

export default Car
