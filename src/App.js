import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBView, MDBCardImage, MDBCardTitle, MDBCardText, MDBCardBody, MDBFormInline, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Img from 'react-image'
import './App.css';
import axios from 'axios'


class App extends Component {

  constructor(props) {
    super(props);
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
      this.sortMovies();
    }).catch(err => {
      // Do something for an error here
      console.log("Error Reading data " + err);
    });
    
  }

sortMovies(){
  const {movies} = this.state
  
  let movies1 = movies.sort((a,b)=> {
    var a1 = a.title.toLowerCase();
    var b1 = b.title.toLowerCase();
    return a1<b1 ?-1:a1> b1? 1 :0;
    })
    console.log(movies1);

    this.setState({
      movies : movies1
    })
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
          <MDBCol>
          <MDBInput label="Search" type="text" />
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
                        <MDBCardImage className="img-fluid" src={value.cover_img} />
                        <MDBCardBody>
                          <MDBIcon icon='film' /> Movie
                            <MDBCardTitle className='font-weight-bold'><strong>{value.title}</strong> <MDBBadge color="primary" pill>{value.year}</MDBBadge></MDBCardTitle>
                          <MDBBadge pill color="warning">{value.tag_1}</MDBBadge> <MDBBadge pill color="warning">{value.tag_2}</MDBBadge> <br></br>

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
