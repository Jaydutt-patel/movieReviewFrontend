import SimpleImageSlider from "react-simple-image-slider";
import { connect } from "react-redux";
const Slider = (props) => {
    // console.log(props)
    // const { movies } = [];
    // const image = props.movies &&
    //     props.movies.map((movie) => {
    //         return movie.img[0]
    //     }
    //     )
    // console.log(image)
    // const images = [
    //     { url: image }
    // ];
    // const slide = images[0].url.map((img) => { return img });
    // console.log(images[0].url)
    const slide = [
        { url: "https://gossipandgab.com/wp-content/uploads/2016/12/vulture.jpg" },
        { url: "https://www.screengeek.net/wp-content/uploads/2018/12/avengers-4-trailer-release.jpg" },
        { url: "https://i.ytimg.com/vi/vM-Bja2Gy04/maxresdefault.jpg" }

    ]
    return (
        <div>
            <SimpleImageSlider
                width="100%"
                height={500}
                images={slide}
                showNavs={true}
                showBullets={true}
            />
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        movies: state.movies,
    };
};

export default connect(mapStateToProps, null)(Slider);