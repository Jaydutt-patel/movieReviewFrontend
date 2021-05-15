import { retrieveMovieById } from "../../Redux/Actions/movies";
import { connect } from "react-redux";
import React, { Component } from "react";
import ModalImage from "react-modal-image";
import ModalVideo from 'react-modal-video';
import "react-modal-video/scss/modal-video.scss";
import imdb from "../../Assets/imdb.png"
import director from "../../Assets/director.png"
import home from "../../Assets/home.png"
import cast from "../../Assets/cast.png"

class Movie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }
    componentDidMount() {

        this.props.retrieveMovieById(this.props.match.params.id);
        // console.log('props', this.props.match.params.id)
    }
    render() {
        const { movie } = this.props;
        // console.log(movie.cimg,"--",movie.img)
        if (movie.img === undefined || movie.img[0] === undefined || movie.img[0] === null) {
            return (<>Loading....</>);
        }
        return (
            <div class="container-fluid">
                <header>
                    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark" style={{ justifyContent: "space-between" }}>
                        <a style={{ display: "flex", flexDirection: "row" }} href={"/movies"}><img src={home} style={{ height: "40px" }} alt="Main Logo"></img><p style={{ color: "whitesmoke", paddingLeft: "6px", paddingTop: "3px" }}>Movie Reviewer</p></a>
                    </nav>
                </header>
                <div class="row pt-5">
                    <div class="col-8">
                        <img src={movie.img[0]} alt="Main movie image" height="500px" width="100%" />
                    </div>
                    <div class="col-4">
                        <h1 class="d-flex justify-content-start text-light text-uppercase">{movie.name}</h1>
                        <p class="d-flex justify-content-start text-light">{movie.year}</p>
                        <p class="d-flex justify-content-start text-light">{movie.genre}</p>
                        <table>
                            <tr >
                                <td><img src={imdb} alt="imdb" /></td>
                                <th><p style={{ paddingLeft: "35px", marginTop: "15px" }} class="d-flex justify-content-start  text-light">{movie.rating}⭐️</p></th>
                            </tr>
                            <tr >
                                <td><img src={director} alt="director" /></td>
                                <th><p style={{ paddingLeft: "35px", marginTop: "15px" }} class="d-flex justify-content-start  text-light">{movie.director}</p></th>
                            </tr>
                            <tr >
                                <td><img src={cast} alt="cast" style={{ height: "40px" }} /></td>
                                <th><p style={{ paddingLeft: "35px", marginTop: "15px" }} class="d-flex justify-content-start  text-light">{movie.cast}</p></th>
                            </tr>
                        </table>
                    </div>
                </div><br />
                <div class="row">
                    <div class="col-12 d-flex justify-content-start">
                        <h1 class=" text-light text-uppercase bg-info">Discription</h1>
                    </div>
                </div><br />
                <div class="row">
                    <div class="col-12 d-flex justify-content-start  text-light">
                        <h4>{movie.description}</h4>
                    </div>
                </div><br />
                <div class="row">
                    <div class="col-4 d-flex justify-content-start" >
                        <ModalImage
                            hideDownload={true}
                            hideZoom={true}
                            small={movie.img[2]}
                            large={movie.img[2]}
                            alt="Hello World!"
                        />
                    </div>
                    <div class="col-4 ">
                        <img src={movie.img[1]} alt='Trailer' width="100%" height="100%" onClick={this.openModal} />
                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={movie.tcode} onClose={() => this.setState({ isOpen: false })} allowFullScreen={true} />
                    </div>
                    <div class="col-4 ">
                        <ModalImage
                            hideDownload={true}
                            hideZoom={true}
                            small={movie.img[0]}
                            large={movie.img[0]}
                            alt="Hello World!"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <footer class="navbar navbar-expand-md navbar-dark bg-dark ">
                            <p style={{ color: "white", alignSelf: "center" }}>  Company, Inc.</p>
                        </footer>
                    </div>
                </div>
            </div >
        )
    }


}

const mapStateToProps = (state) => {
    return {
        movie: state.movies,
    };
};

export default connect(mapStateToProps, { retrieveMovieById })(Movie);