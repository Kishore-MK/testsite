import React from 'react';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
const ApplicationStatus = (user) => {
    console.log("user",user);
    
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
                    <i className="text-primary fa-solid fa-lg mr-1"></i> <b></b>
                    </span>
                </p>
                </div>
            </div>
            <Container>
                <div className="container-fluid">
                    <div className="row">
                        <Row style={{Padding:"50px"}}>
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
                <Row>
                    <div style={{padding:"50px"}}>
                        <Accordion defaultActiveKey="0">
                            <p>
                                <b>Note : </b><br/>
                                <b>Every Phase is elimination phase!</b><br/>
                                <b>Please attend every round seriouly*</b>
                            </p>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Form Evaluation</Accordion.Header>
                                <Accordion.Body>
                                <b>Criteria</b> : Based on your Given Informations
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Foundation Test</Accordion.Header>
                                <Accordion.Body>
                                    <b>Pattern</b> : [ <b>MCQ BASED</b> ]<br/>
                                    <ul>
                                        <li>
                                        Programming Questions,
                                        </li>
                                        <li>
                                        Basics of Os, DBMS & Git and,
                                        </li>
                                        <li>
                                        Soft Skills.
                                        </li>
                                    </ul>
                                    <b>[ 15 Mins - 25 Questions ]</b>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Domain Wise Test</Accordion.Header>
                                <Accordion.Body>
                                    <b>Pattern</b> : [ <b>MCQ BASED</b> ]<br/>
                                    <ul>
                                        <li>
                                        Domain Based Questions,
                                        </li>
                                        <li>
                                        Basics of Os, DBMS & Git and,
                                        </li>
                                        <li>
                                        Soft Skills.
                                        </li>
                                    </ul>
                                    <b>[ 15 Mins - 25 Questions ]</b>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Interview</Accordion.Header>
                                <Accordion.Body>
                                    <b>Pattern</b> : [ <b>Face To Face Round</b> ]<br/>
                                    <ul>
                                        <li>
                                        Technical Quesitons, 
                                        </li>
                                        <li>
                                        Behavior Quesitons and,
                                        </li>
                                        <li>
                                        Problem Solving Technical.
                                        </li>
                                    </ul>
                                    <b>[ 30 Mins At Max]</b>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Final Decision</Accordion.Header>
                                <Accordion.Body>
                                <b>Criteria</b> : Background Verification Check
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Onboarding</Accordion.Header>
                                <Accordion.Body>
                                Finally you are done with your process be chill!
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Row>
            </Container>
            </div>
        </div>
        </div>
    </>
  );
};

export default ApplicationStatus;