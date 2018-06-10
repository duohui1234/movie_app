
import React, { Component } from 'react';
import './Movie.css'

class Movie extends Component{
    render(){
        return (
        <div>
            <MoviePoster />
           <h1>Hello This is a movie</h1>
        </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://www.gateway978.com/wordpress/wp-content/uploads/2017/01/la-la-land-865x433.jpg"/>
        )
    }
}


export default Movie