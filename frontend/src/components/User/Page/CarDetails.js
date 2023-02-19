
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
    MDBInput, MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';
import React, { useState, useEffect } from "react";

const CarDetails = () => {
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

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <div>
            <div className='mt-3'>
                <MDBRow>
                    <MDBCol >
                    </MDBCol >
                    <MDBCol >
                        <div className='d-md-flex ustify-content-start align-items-center mt-2 mb-4'>
                            <h6 className="font-weight-bold  " style={{ fontSize: '20px', marginRight: "35px" }}>Location   </h6>
                            <select defaultValue={"A"} name="division" value={division} onChange={onChange}>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>
                        </div>
                    </MDBCol >
                    <MDBCol >
                        <MDBInput wrapperClass='mb-4' size='lg' id='form3' type='date' name="dob"
                            value={dob}
                            onChange={onChange}
                            required />
                    </MDBCol >
                    <MDBCol >
                    </MDBCol >


                </MDBRow>
            </div>
            <div>
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
            </div>
        </div>

    )
}

export default CarDetails
