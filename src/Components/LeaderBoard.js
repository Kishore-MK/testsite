import React from 'react'
import NavBar from './NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Leaderboard(){
  return (
    <>
        <header><NavBar/></header>
        <Container>
            <div>
              <Row>
                  <Col>{}</Col>
                  <Col>{}</Col>
              </Row>
            </div>
        </Container>
        <footer></footer>
    </>
  )
}

export default Leaderboard;



// <Container>
//                     <div className="col d-inline-flex justify-content-around my-3 py-4 mx-n2">
//                         <Row>
//                             <Col>
//                                 <div className="col d-inline-flex align-items-center">
//                                     <i className="text-primary fa-solid fa-clipboard-check fa-2xl mx-4 mb-3"></i>
//                                     <p className="text-dark font-weight-bolder py-1 px-1 mx-n2"><br />Form Evaluation</p>
//                                 </div>
//                             </Col>
//                             <Col>
//                                 <div className="col d-inline-flex align-items-center">
//                                     <i className="text-warning fa-solid fa-boxes-packing fa-2xl mx-4 mb-3"></i>
//                                     <p className="text-dark font-weight-bolder py-1 px-1 mx-n2"><br />Foundation Test</p>
//                                 </div>
//                             </Col>
//                             <Col>
//                                 <div className="col d-inline-flex align-items-center">
//                                     <i className="text-info fa-solid fa-truck-arrow-right fa-2xl mx-4 mb-3"></i>
//                                     <p className="text-dark font-weight-bolder py-1 px-1 mx-n2"><br />Domain Wise Test</p>
//                                 </div>
//                             </Col>
//                             <Col>
//                                 <div className="col d-inline-flex align-items-center">
//                                     <i className="text-success fa-solid fa-house-chimney fa-2xl mx-4 mb-3"></i>
//                                     <p className="text-dark font-weight-bolder py-1 px-1 mx-n2"><br />Interview</p>
//                                 </div>
//                             </Col>
//                             <Col>
//                                 <div className="col d-inline-flex align-items-center">
//                                     <i className="text-success fa-solid fa-house-chimney fa-2xl mx-4 mb-3"></i>
//                                     <p className="text-dark font-weight-bolder py-1 px-1 mx-n2"><br />Final Decision</p>
//                                 </div>
//                             </Col>
//                             <Col>
//                                 <div className="col d-inline-flex align-items-center">
//                                     <i className="text-success fa-solid fa-house-chimney fa-2xl mx-4 mb-3"></i>
//                                     <p className="text-dark font-weight-bolder py-1 px-1 mx-n2"><br />Onboarding</p>
//                                 </div>
//                             </Col>
//                             <Col xs={6}></Col>
//                             <Col></Col>
//                         </Row>
//                     </div>
//             </Container>