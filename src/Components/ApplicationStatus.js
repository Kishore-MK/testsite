import React from 'react';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const OrderTracker = () => {
  return (
    <>
        <header><NavBar/></header>
        <div className="d-flex flex-column overflow-auto h-100 bg-gray text-dark">
        <div className="container h-50 px-4 py-5 mx-auto">
            <div className="card bg-light shadow-lg border border-dark rounded-lg py-3 px-5 my-5">
            <div className="row d-flex justify-content-between mx-5 pt-3 my-3">
                <div className="container text-center">
                <p className="h3 text-success mb-3"><b>Application Stage</b></p>
                </div>
                <div className="d-flex">
                <p className="h5 text-dark">
                    <i className="text-primary fa-solid fa-lg mr-1"></i> <b>Roll Number :</b>
                    <span className="h5 text-dark">
                    <i className="text-primary fa-solid fa-lg mr-1"></i> <b>717821F134</b>
                    </span>
                </p>
                </div>
            </div>
            
            <Container>
                <div className="container-fluid">
                    <div className="row">
                        <Row>
                        <div className="col-md-12">
                            <div className="container-fluid p-2 align-items-center">
                                <div className="d-flex justify-content-around">
                                    <Col>
                                    <button className="btn bg-success text-white rounded-circle" title="Form Evaluation">
                                    <i className="fa-solid fa-check"></i>
                                    </button>
                                    </Col>
                                    <span className="bg-success w-50 p-1 mx-n1 rounded mt-auto mb-auto"></span>
                                    <Col>
                                    <button className="btn bg-success text-white rounded-circle" title="Foundation Test">
                                    <i className="fa-solid fa-check"></i>
                                    </button>
                                    </Col>
                                    <span className="bg-success w-50 p-1 mx-n1 rounded mt-auto mb-auto"></span>
                                    <Col>
                                    <button className="btn bg-success text-white rounded-circle" title="Domain Wise Test" style={{ zIndex: 1 }}>
                                    <i className="fa-solid fa-check"></i>
                                    </button>
                                    </Col>
                                    <span className="bg-secondary w-50 p-1 mx-n1 rounded mt-auto mb-auto"></span>
                                    <Col>
                                    <button className="btn bg-secondary text-white rounded-circle" title="Interview">
                                    <i className="fa-solid fa-check"></i>
                                    </button>
                                    </Col>
                                    <span className="bg-secondary w-50 p-1 mx-n1 rounded mt-auto mb-auto"></span>
                                    <Col>
                                    <button className="btn bg-secondary text-white rounded-circle" title="Final Decision">
                                    <i className="fa-solid fa-check"></i>
                                    </button>
                                    </Col>
                                    <span className="bg-secondary w-50 p-1 mx-n1 rounded mt-auto mb-auto"></span>
                                    <Col>
                                    <button className="btn bg-secondary text-white rounded-circle" title="Onboarding">
                                    <i className="fa-solid fa-check"></i>
                                    </button>
                                    </Col>
                                </div>
                            </div>
                        </div>
                        </Row>
                    </div>
                </div>
            </Container>
            </div>
        </div>
        </div>
    </>
  );
};

export default OrderTracker;


            //      <div className="col d-inline-flex justify-content-around my-3 py-4 mx-n2">
            //     <div className="col d-inline-flex align-items-center">
            //     <i className="text-primary fa-solid fa-clipboard-check fa-2xl mx-4 mb-3"></i>
            //     <p className="text-dark font-weight-bolder py-1 px-1 mx-n2"><br />Form Evaluation</p>
            //     </div>
            //     <div className="col d-inline-flex align-items-center">
            //     <i className="text-warning fa-solid fa-boxes-packing fa-2xl mx-4 mb-3"></i>
            //     <p className="text-dark font-weight-bolder py-1 px-1 mx-n2"><br />Foundation Test</p>
            //     </div>
            //     <div className="col d-inline-flex align-items-center">
            //     <i className="text-info fa-solid fa-truck-arrow-right fa-2xl mx-4 mb-3"></i>
            //     <p className="text-dark font-weight-bolder py-1 px-1 mx-n2"><br />Domain Wise Test</p>
            //     </div>
            //     <div className="col d-inline-flex align-items-center">
            //     <i className="text-success fa-solid fa-house-chimney fa-2xl mx-4 mb-3"></i>
            //     <p className="text-dark font-weight-bolder py-1 px-1 mx-n2"><br />Interview</p>
            //     </div>
            //     <div className="col d-inline-flex align-items-center">
            //     <i className="text-success fa-solid fa-house-chimney fa-2xl mx-4 mb-3"></i>
            //     <p className="text-dark font-weight-bolder py-1 px-1 mx-n2"><br />Final Decision</p>
            //     </div>
            //     <div className="col d-inline-flex align-items-center">
            //     <i className="text-success fa-solid fa-house-chimney fa-2xl mx-4 mb-3"></i>
            //     <p className="text-dark font-weight-bolder py-1 px-1 mx-n2"><br />Onboarding</p>
            //     </div>
            // </div>