
import React from 'react';
import './Movie.css'
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';




//smart component
// class Movie extends Component{

//     static propTypes = {
//         title : PropTypes.string,
//         poster : PropTypes.string
//     }

//     render(){
//         return (
//         <div>
//             <MoviePoster poster ={this.props.poster}/>
//            <h1>{this.props.title}</h1>
//         </div>
//         )
//     }
// }


//dumb component => don't have state, update, ... just return someting
function Movie({ title, poster, genres, synopsis }) {
    return (
        <div className="Movie">

            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title} />
            </div>

            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='-more-'
                        trimRight
                        basedOn='letters'
                    />
                </p>
            </div>


        </div>
    )
}

Movie.propTypes = {
    //poster : PropTypes.number.isRequired     //=> 에러메세지 뜸. poster는 string타입이기때문에
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}



// class MoviePoster extends Component{
//     render(){
//         return(
//             <img src= {this.props.poster }/>
//         )
//     }
// }


function MovieGenre({ genre }) {
    return (
        <span className="Movie__Genres">{genre} </span>
    )
}



//function은 render, state, lifecycle 등이 없다
function MoviePoster({ poster, alt }) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}



// MoviePoster.propTypes = {
//  //poster : PropTypes.number.isRequired     //=> 에러메세지 뜸. poster는 string타입이기때문에
//  poster : PropTypes.string.isRequired 
// }


export default Movie