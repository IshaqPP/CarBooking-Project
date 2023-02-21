import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import UserHeader from '../Header/User_Header'

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

    const [formData, setFormData] = useState({});

    const [Location, SetLocation] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/Location')
            .then(response => {
                SetLocation(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("^^^^^");
        console.log(formData);

        axios.post('http://localhost:5000/Booking', formData)
            .then(response => {
                window.alert("Car Successfully Booked")
            })
            .catch(error => {
                console.error(error);
            });
    };
    return (
        <div style={{ minHeight: "100%" }}>
            <UserHeader />
            <MDBContainer fluid className='bg-dark ' >
                < MDBRow className='d-flex justify-content-center ' style={{ paddingTop: "50px", paddingBottom: "145px" }}>
                    <MDBCol>
                        <MDBCard className='my-1 '>
                            <MDBRow className='g-0'>
                                <MDBCol md='12' className="d-none d-md-block">
                                    <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                                        <h3 className="mb-4 text-uppercase text-center font-weight-bold"> Booking Form </h3>
                                        <form onSubmit={handleSubmit}>
                                            <MDBRow>
                                                <MDBCol md='12'>
                                                    <MDBInput wrapperClass='mb-4' size='lg' id='form1' type='text' name="name" placeholder="Name "
                                                        onChange={handleInputChange}
                                                        required />
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBInput wrapperClass='mb-4' size='lg' id='form3' type='date' name="Date"
                                                onChange={handleInputChange}
                                                required />
                                            <div className='d-md-flex ustify-content-start align-items-center mt-2 mb-4'>
                                                <h6 className="font-weight-bold  " style={{ fontSize: '20px', marginRight: "35px" }}>Location   </h6>
                                                <select name="Location" onChange={handleInputChange}>
                                                    {Location.map(item => (
                                                        <option key={item.id} value={item.name}>{item.name}</option>
                                                    ))}
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
