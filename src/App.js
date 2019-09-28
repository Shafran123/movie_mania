import React, { Component } from 'react';
import { MDBBtn, MDBFormInline, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Img from 'react-image'
import './App.css';

class App extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
           <MDBCol>
            <img src='https://i.imgur.com/l8vyr9X.png'></img>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol className="d-flex justify-content-center">
            <MDBFormInline className="md-form">
              <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
              <MDBBtn gradient="blue" rounded size="sm" type="submit">
                Search
              </MDBBtn>
            </MDBFormInline>
          </MDBCol>

        </MDBRow>

      </MDBContainer>
    );
  }
}

export default App;
