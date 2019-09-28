import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBView, MDBCardImage, MDBCardTitle, MDBCardText, MDBCardBody, MDBFormInline, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Img from 'react-image'
import './App.css';
import axios from 'axios'


class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],

    }
  }

  componentDidMount() {
    fetch('./coredata.json').then(response => {
      console.log(response);
      return response.json();
    }).then(data => {
      // Work with JSON data here
      console.log(data.movies);
      this.setState({
        movies: data.movies
      })
    }).catch(err => {
      // Do something for an error here
      console.log("Error Reading data " + err);
    });
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <img className='s' src='https://i.imgur.com/WTGKUij.png'></img>
          </MDBCol>
          <MDBCol>
            <img src='https://i.imgur.com/l8vyr9X.png'></img>
          </MDBCol>
          <MDBCol></MDBCol>
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
        {/* Card */}


        <MDBRow>

          <div>
            {
              this.state.movies.map((value) =>
                <div className="fetch">

                  <span>
                    <MDBCol style={{ maxWidth: "20rem" }}>

                      <MDBCard>

                        <MDBCardImage className="img-fluid" src="https://i.imgur.com/D0jm0sc.jpg" />
                        <MDBCardBody>
                          <MDBIcon icon='film' /> Movie
    <MDBCardTitle className='font-weight-bold'><strong>{value.title}</strong> <MDBBadge color="primary" pill>1997</MDBBadge></MDBCardTitle>
                          <MDBBadge pill color="warning">Drama</MDBBadge> <MDBBadge pill color="warning">Romance</MDBBadge> <br></br>

                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>



                  </span>
                </div>
              )
            }
          </div>


        </MDBRow>

      </MDBContainer>
    );
  }
}



export default App;
