import React, { Component } from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardTitle,
  MDBCardBody,
  MDBIcon,
  MDBBadge,
  MDBContainer,
  MDBRow,
  MDBCol
} from "mdbreact";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.items = ["name1", "name2", "name3", "name4"];
    this.state = {
      movies: [],
      suggestions: [],
      updatedMovies: [],
      text: ""
    };
  }

  componentDidMount() {
    fetch("./coredata.json")
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        // Work with JSON data here
        console.log(data.movies);
        this.setState({
          movies: data.movies
        });
        this.sortMovies();
      })
      .catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
  }

  sortMovies() {
    const { movies } = this.state;

    let movies1 = movies.sort((a, b) => {
      var a1 = a.title.toLowerCase();
      var b1 = b.title.toLowerCase();
      return a1 < b1 ? -1 : a1 > b1 ? 1 : 0;
    });
    console.log(movies1);

    this.setState({
      movies: movies1
    });
  }

  //changes for search bar from here
  onTextChanged = e => {
    const value = e.target.value;
    let suggestions = [];
    let updatedMovies = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      //this is the main change
      updatedMovies = this.state.movies.sort().filter(v => regex.test(v.title));

      let names = this.state.movies.sort().map(item => {
        return item.title;
      });

      suggestions = names.sort().filter(v => regex.test(v));
      console.log("these are the sugestions ", suggestions);
    }
    this.setState(() => ({ suggestions, text: value, updatedMovies }));
  };
  suggestionSelected = value => {
    this.setState(() => ({
      text: value,
      suggestions: []
    }));
  };
  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map(item => (
          <li onClick={() => this.suggestionSelected(item)}>{item}</li>
        ))}
      </ul>
    );
  }

  //made a common component for passing the respective the respective list
  listMoviesComponent(moviesList) {
    return (
      <div>
        {" "}
        {moviesList.map(value => (
          <div className="fetch">
            <span>
              <MDBCol style={{ maxWidth: "20rem" }}>
                <MDBCard>
                  <MDBCardImage className="img-fluid" src={value.cover_img} />
                  <MDBCardBody>
                    <MDBIcon className="subtitle" icon="film" /> Movie
                    <br></br>
                    <MDBCardTitle className="title">
                      <strong>{value.title}</strong>
                    </MDBCardTitle>
                    <MDBBadge color="primary" pill>
                      {value.year}
                    </MDBBadge>{" "}
                    <MDBBadge pill color="warning">
                      {value.tag_1}
                    </MDBBadge>{" "}
                    <MDBBadge pill color="warning">
                      {value.tag_2}
                    </MDBBadge>
                    <br></br>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </span>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { text } = this.state;
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <img
              className="s"
              src="https://i.imgur.com/fQylRRI.png"
              alt="filmstripe"
            ></img>
          </MDBCol>
          <MDBCol>
            <img src="https://i.imgur.com/mtIx6C7.png" alt="logo"></img>
          </MDBCol>
          <MDBCol></MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol>
            <div className="inputWrapper">
              <input
                placeholder="Search for the movies"
                value={text}
                label="Search"
                onChange={this.onTextChanged}
                type="text"
              />
              {this.renderSuggestions()}
            </div>
          </MDBCol>
        </MDBRow>
        {/* Card */}
        <MDBRow className="d-flex justify-content-center">
          {this.state.updatedMovies.length > 0
            ? this.listMoviesComponent(this.state.updatedMovies)
            : this.listMoviesComponent(this.state.movies)}
           </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
