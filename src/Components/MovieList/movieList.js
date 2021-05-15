import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveMovie } from "../../Redux/Actions/movies";
import Slider from '../Slider/slider';
import "./movieList.css"
import home from "../../Assets/home.png"

class MovieList extends Component {

  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);

    this.state = {
      searchVal: ""
    };
  }

  componentDidMount() {
    this.props.retrieveMovie();
  }

  onSearch = (e) => {
    const search = e.target.value;
    this.setState({
      searchVal: search,
    });
  }

  render() {
    const { searchVal } = this.state;
    const { movies } = this.props;
    // console.log(movies)
    //   if(movies.img===undefined||movies.img[0]===undefined||movies.img[0]===null){
    //     return (<>Loading....</>);
    // }
    const filteredMovies = movies.filter(movie => {
      return movie.name.toLowerCase().includes(searchVal.toLowerCase()) ||
        movie.genre.toLowerCase().includes(searchVal.toLowerCase()) ||
        movie.type.toLowerCase().includes(searchVal.toLowerCase())
    })


    return (
      <div>
        <div class="row">
          <div class="col-md-12">
            <header>
              <nav class="navbar navbar-dark bg-dark fixed-top" style={{ justifyContent: "space-between" }}>
                <a style={{ display: "flex", flexDirection: "row" }} href={"/movies"}><img src={home} style={{ height: "40px" }} alt="Logo"></img><p style={{ color: "whitesmoke", paddingLeft: "6px", paddingTop: "3px" }}>Movie Reviewer</p></a>
                <input class="form-control col-sm-2" value={searchVal} type="text" placeholder="Search Here" aria-label="Search" onChange={this.onSearch} />
              </nav>
            </header>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <Slider data={movies} />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <ul style={{ paddingTop: "50px" }}>
              <div className="row">
                {filteredMovies &&
                  filteredMovies.map((movies, index) => (
                    <div className="col-md-4">
                      <a href={"/MovieDetail/" + movies.id}>
                        <div className="card" style={{ marginBottom: "20px", border: "solid 2px black", backgroundColor: "gainsboro", borderRadius: "5px" }}>
                          <img className="image" src={movies.img[0]} alt="Card image cap" height="300px" />
                          <div className="middle">
                            <h5 className="text">{movies.name}</h5>
                            <h5 >Rating: {movies.rating} ⭐️</h5>
                            <h5 >Genre: {movies.genre}</h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
              </div>
            </ul>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-md-12">
            <footer class="navbar navbar-expand-md navbar-dark bg-dark ">
              <p style={{ color: "white", alignSelf: "center" }}>  Company, Inc.</p>
            </footer>
          </div> */}
          <div class="footer">
            <div className="col-md-12">
              <footer class="navbar navbar-dark bg-dark  bg-dark ">
                <div class="footer-copyright text-center text-light">© 2020 Copyright S
          </div>
              </footer>
            </div>
          </div>
        </div>
      </div >
    );
  }

}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps, { retrieveMovie })(MovieList);