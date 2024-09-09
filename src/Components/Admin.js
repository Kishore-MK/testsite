import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from './NavBar';
import Table from 'react-bootstrap/Table';

function Admin(){
  return (
    <>
        <header><NavBar/></header>
        <div style={{cursor:"pointer"}}>
            <Table striped bordered hover variant="dark" style={{padding:"20px"}}>
                <thead>
                    <tr>
                        <th>Roll Number</th>
                        <th>Email Id</th>
                        <th>Round 2</th>
                        <th>Round 3</th>
                        <th>Round 4</th>
                        <th>Round 5</th>
                        <th>Round 6</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>717821f134</td>
                        <td>717821f134@kce.ac.in</td>
                        <td>
                        <Form.Select size="sm">
                            <option>Select</option>
                            <option value="success">Selected</option>
                            <option value="danger">Not Selected</option>
                        </Form.Select>
                        </td>
                        <td>
                        <Form.Select size="sm">
                            <option>Select</option>
                            <option value="success">Selected</option>
                            <option value="danger">Not Selected</option>
                        </Form.Select>
                        </td>
                        <td>
                        <Form.Select size="sm">
                            <option>Select</option>
                            <option value="success">Selected</option>
                            <option value="danger">Not Selected</option>
                        </Form.Select>
                        </td>
                        <td>
                        <Form.Select size="sm">
                            <option>Select</option>
                            <option value="success">Selected</option>
                            <option value="danger">Not Selected</option>
                        </Form.Select>
                        </td>
                        <td>
                        <Form.Select size="sm">
                            <option>Select</option>
                            <option value="success">Selected</option>
                            <option value="danger">Not Selected</option>
                        </Form.Select>
                        </td>
                        <td><Button variant="primary">Update</Button></td>
                    </tr>
                    <tr>
                        <td>717821f134</td>
                        <td>717821f134@kce.ac.in</td>
                        <td>
                        <Form.Select size="sm">
                            <option>Select</option>
                            <option value="success">Selected</option>
                            <option value="danger">Not Selected</option>
                        </Form.Select>
                        </td>
                        <td>
                        <Form.Select size="sm">
                            <option>Select</option>
                            <option value="success">Selected</option>
                            <option value="danger">Not Selected</option>
                        </Form.Select>
                        </td>
                        <td>
                        <Form.Select size="sm">
                            <option>Select</option>
                            <option value="success">Selected</option>
                            <option value="danger">Not Selected</option>
                        </Form.Select>
                        </td>
                        <td>
                        <Form.Select size="sm">
                            <option>Select</option>
                            <option value="success">Selected</option>
                            <option value="danger">Not Selected</option>
                        </Form.Select>
                        </td>
                        <td>
                        <Form.Select size="sm">
                            <option>Select</option>
                            <option value="success">Selected</option>
                            <option value="danger">Not Selected</option>
                        </Form.Select>
                        </td>
                        <td><Button variant="primary">Update</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <footer></footer>
    </>
  )
}

export default Admin