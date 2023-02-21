
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
    MDBInput, MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const CarDetails = () => {
    const [formData, setFormData] = useState({
        Location: "",
        Date: ""
    });


    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

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

    return (
        <div>
            <div className='mt-3'>
                <MDBRow>
                    <MDBCol >
                    </MDBCol >
                    <MDBCol >
                        <div className='d-md-flex ustify-content-start align-items-center mt-2 mb-4'>
                            <h6 className="font-weight-bold  " style={{ fontSize: '20px', marginRight: "35px" }}>Location   </h6>
                            <select name="Location" value={Location} onChange={onChange}>
                                {Location.map(item => (
                                    <option key={item.id} value={item.name}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                    </MDBCol >
                    <MDBCol >
                        <MDBInput wrapperClass='mb-4' size='lg' id='form3' type='date' name="Date"
                            value={Date}
                            onChange={onChange}
                            required />
                    </MDBCol >
                    <MDBCol >
                    </MDBCol >


                </MDBRow>
            </div>
            <div>
                {carData.map(item => (
                    <Card style={{ width: '18rem' }} key={item.id}>
                        <Card.Body>
                            <Card.Title><label>Name &emsp;&nbsp; &nbsp;: &nbsp;</label><b>{item.name} </b></Card.Title>
                            <Card.Text>
                                <label>Brand &emsp;&emsp;&nbsp; &nbsp;: &nbsp;</label> <b>{item.Brand}</b>
                            </Card.Text>
                            <Card.Text>
                                <label>Segment &emsp;&nbsp;  :&nbsp;</label> <b>{item.Segment}</b>
                            </Card.Text>
                            <Button variant="primary" style={{ marginLeft: "31%" }} onClick={() => <Link to='/Carbook'></Link>}>Book</Button>

                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>

    )
}

export default CarDetails
