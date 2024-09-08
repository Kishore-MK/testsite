import React from 'react'
import NavBar from './Components/NavBar';
import AskLead from './Components/AskLead';
import homebanner from './homebanner.png';
import Table from 'react-bootstrap/Table';

function Home(){
  return (
    <div>
        <header><NavBar/></header>
        <body>
            <div className='HomeBanner' style={{display: "inlineBlock",textAlign: "center"}}>
              <img style={{height:"50%", width:"50%",padding:"50px"}} src={homebanner}></img>
            </div>
            <div className='Events-Tracker'>
              <h2>Events Planner</h2>
              <div className='inner-event' style={{padding:"50px", textAlign:"center"}}>  
                <Table striped bordered hover>
                    <thead>
                        <tr>
                          <th>Upcoming Events</th>
                          <th>Past Events</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>Wanna Become Pro at DSA!</td>
                          <td>Legends of Zone</td>
                        </tr>
                    </tbody>
                </Table>
              </div>
            </div>
        </body>
        <footer>

        </footer>
    </div>
  );
}
export default Home;