import React from "react";
import { Form, Row, Col } from 'react-bootstrap'

class CostAllocDetails extends React.Component{
    render() {
        return(
            <div>
                <Form>
                    <Form.Row style={{height:"40px"}}>
                        <Form.Group as={Row} controlId="formSupplier" style={{display:"inline-block", width:"400px"}}>
                            <Form.Label column style={{display:"inline-block", width:"100px",paddingRight:"0px"}}>Supplier : </Form.Label>
                            <Col sm="10" style={{display:"inline-block", width:"300px",paddingLeft:"0px"}}>
                                <Form.Control plaintext readOnly defaultValue="A.M.F HONG KONG" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formClient" style={{display:"inline-block", width:"400px"}}>
                            <Form.Label column style={{display:"inline-block", width:"100px",paddingRight:"0px"}}>Client : </Form.Label>
                            <Col sm="10" style={{display:"inline-block", width:"300px",paddingLeft:"0px"}}>
                                <Form.Control plaintext readOnly defaultValue="AEON FOREST CO. LTD" />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row style={{height:"40px"}}>
                        <Form.Group as={Row} controlId="formSupplier" style={{display:"inline-block", width:"400px"}}>
                            <Form.Label column style={{display:"inline-block", width:"100px",paddingRight:"0px"}}>Trader : </Form.Label>
                            <Col sm="10" style={{display:"inline-block", width:"300px",paddingLeft:"0px"}}>
                                <Form.Control plaintext readOnly defaultValue="CONCEPT 4 LTD" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formClient" style={{display:"inline-block", width:"400px"}}>
                            <Form.Label column style={{display:"inline-block", width:"100px",paddingRight:"0px"}}>Batch # : </Form.Label>
                            <Col sm="10" style={{display:"inline-block", width:"300px",paddingLeft:"0px"}}>
                                CA123456
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row style={{height:"40px"}}>
                        <Form.Group as={Row} controlId="formSupplier" style={{display:"inline-block", width:"400px"}}>
                            <Form.Label column style={{display:"inline-block", width:"100px",paddingRight:"0px"}}></Form.Label>
                            <Col sm="10" style={{display:"inline-block", width:"300px",paddingLeft:"0px"}}>
                                
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formClient" style={{display:"inline-block", width:"450px"}}>
                            <Form.Label column style={{display:"inline-block", width:"150px",paddingRight:"0px"}}>Previous Batch # : </Form.Label>
                            <Col sm="10" style={{display:"inline-block", width:"300px",paddingLeft:"0px"}}>
                                <Form.Control plaintext readOnly defaultValue="AEON FOREST CO. LTD" />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row style={{height:"40px"}}>
                        <Form.Group as={Row} controlId="formSupplier" style={{display:"inline-block", width:"400px"}}>
                            <Form.Label column style={{display:"inline-block", width:"100px",paddingRight:"0px"}}>Status : </Form.Label>
                            <Col sm="10" style={{display:"inline-block", width:"300px",paddingLeft:"0px"}}>
                                <Form.Control plaintext readOnly defaultValue="Open" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formClient" style={{display:"inline-block", width:"450px"}}>
                            <Form.Label column style={{display:"inline-block", width:"150px",paddingRight:"0px"}}>Payment Done : </Form.Label>
                            <Col sm="10" style={{display:"inline-block", width:"300px",paddingLeft:"0px"}}>
                                <Form.Control plaintext readOnly defaultValue="AEON FOREST CO. LTD" />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row style={{height:"40px"}}>
                        <Form.Group as={Row} controlId="formSupplier" style={{display:"inline-block", width:"400px"}}>
                            <Form.Label column style={{display:"inline-block", width:"100px",paddingRight:"0px"}}>Currency : </Form.Label>
                            <Col sm="10" style={{display:"inline-block", width:"300px",paddingLeft:"0px"}}>
                                <Form.Control plaintext readOnly defaultValue="CNY" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formClient" style={{display:"inline-block", width:"450px"}}>
                            <Form.Label column style={{display:"inline-block", width:"150px",paddingRight:"0px"}}>Currency Rate : </Form.Label>
                            <Col sm="10" style={{display:"inline-block", width:"300px",paddingLeft:"0px"}}>
                                <Form.Control plaintext readOnly defaultValue="1.10 versus HKD" />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row style={{height:"40px"}}>
                        <Form.Group as={Row} controlId="formSupplier" style={{display:"inline-block", width:"400px"}}>
                            <Form.Label column style={{display:"inline-block", width:"100px",paddingRight:"0px"}}>Invoice : </Form.Label>
                            <Col sm="10" style={{display:"inline-block", width:"300px",paddingLeft:"0px"}}>
                                <Form.Control plaintext readOnly defaultValue="THA3434233" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formClient" style={{display:"inline-block", width:"450px"}}>
                            <Form.Label column style={{display:"inline-block", width:"150px",paddingRight:"0px"}}>Invoice Date : </Form.Label>
                            <Col sm="10" style={{display:"inline-block", width:"300px",paddingLeft:"0px"}}>
                                <Form.Control plaintext readOnly defaultValue="03-10-2019" />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row style={{height:"40px"}}>
                        <Form.Group as={Row} controlId="formSupplier" style={{display:"inline-block", width:"400px"}}>
                            <Form.Label column style={{display:"inline-block", width:"100px",paddingRight:"0px"}}>TO Year : </Form.Label>
                            <Col sm="10" style={{display:"inline-block", width:"300px",paddingLeft:"0px"}}>
                                <Form.Control plaintext readOnly defaultValue="2019" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formClient" style={{display:"inline-block", width:"400px"}}>
                            <Form.Label column style={{display:"inline-block", width:"100px",paddingRight:"0px"}}>Cost Type : </Form.Label>
                            <Col sm="10" style={{display:"inline-block", width:"300px",paddingLeft:"0px"}}>
                                <Form.Control plaintext readOnly defaultValue="Packaging" />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row style={{height:"40px"}}>
                         <Form.Group as={Row} controlId="formClient" style={{display:"inline-block", width:"400px"}}>
                            <Form.Label column style={{display:"inline-block", width:"100px",paddingRight:"0px"}}>Comments : </Form.Label>
                            <Col sm="10" style={{display:"inline-block", width:"300px",paddingLeft:"0px"}}>
                                <Form.Control plaintext readOnly defaultValue="test CA  with react app" />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </div>
            
        )
    }
}

export default CostAllocDetails;