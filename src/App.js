import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

 

//Render => WillMount -> render -> DidMount
//Update => WillReceivProps -> shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
 

class App extends Component {



  // state가 업데이트 되면 render()가 다시 실행된다.
  // state값을 변경할 때는 반드시 setState를 사용해야 한다
     
 state = {}

  // componentDidMount(){
  //   // timeout = > 00시간 후에 00 기능을 수행시킨다는 내용. setTimeout(function,1000)
  //   setTimeout( () => {
  //     this.setState({
  //         movies: [
  //          // ...this.state.movies,    //movie에 들어있는 이전 요소들을 그대로 두고, 이부분을 삭제하면 5초 후에 기존 영화리스트들은 안보이고 새로 추가한 어벤져스만 보인다.
  //            //+ 새로운 요소를 추가해라
  //           {
  //             title : "Avengers",
  //             poster : "data:image/jpeg;base64,
  //           }
  //         ]
  //     })
  //   }, 5000)
  // }


  componentDidMount(){
      this._getMovies() 
  }
 
 
  _renderMovies = () => {

      const movies =  this.state.movies.map((movie) => {

          return <Movie 
          title = {movie.title_english} 
          poster = {movie.medium_cover_image} 
          key = {movie.id}  
          genres = {movie.genres}
          synopsis = {movie.synopsis}/>
       })

       return movies
   }

    _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
        movies
    })
  }

  _callApi = () => {
    return   fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log() )
  }



  render() {
   
    /* 첨에 state가 비어있기 때문에 비어있을 때는 Loading출력하도록. setTimeout에서 5초 뒤에 movie 리스트를 넣었을 때는 무비를 렌더하도록 */
    // 내가 찾는 데이터가 있는지 물어보고 있으면 데이터를 출력하고 없으면 로딩중 메세지 출력

    
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : "Loading"}
      </div> 

    );
  }
}

export default App;
