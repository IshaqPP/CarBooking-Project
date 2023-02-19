import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';


const Booking = () => {

    const [formData, setFormData] = useState({
        name: "",
        Date: "",
        Location: ""
    });


    const handleClear = () => {
        setFormData("");
    };

    const { name, Date, Location } = formData;


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
                                        <h3 className="mb-4 text-uppercase text-center font-weight-bold"> Booking Form </h3>
                                        <form onSubmit={onSubmit}>
                                            <MDBRow>
                                                <MDBCol md='12'>
                                                    <MDBInput wrapperClass='mb-4' size='lg' id='form1' type='text' name="name" placeholder="Name "
                                                        value={name}
                                                        onChange={onChange}
                                                        required />
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBInput wrapperClass='mb-4' size='lg' id='form3' type='date' name="dob"
                                                value={Date}
                                                onChange={onChange}
                                                required />
                                            <div className='d-md-flex ustify-content-start align-items-center mt-2 mb-4'>
                                                <h6 className="font-weight-bold  " style={{ fontSize: '20px', marginRight: "35px" }}>Location   </h6>
                                                <select defaultValue={"A"} name="division" value={Location} onChange={onChange}>
                                                    <option value="A">A</option>
                                                    <option value="B">B</option>
                                                    <option value="C">C</option>
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
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </MDBCol>
                </MDBRow >
            </MDBContainer >
        </div >
    )
}

export default Booking
