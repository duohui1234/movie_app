import React, { Component } from 'react';
import logo from './logo.svg';
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
  //             poster : "data:image/jpeg;base64,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"

  //           }
  //         ]
  //     })
  //   }, 5000)
  // }


  componentDidMount(){
    setTimeout( () => {
      this.setState({
        movies : [
          {
            title : "Lalaland",
            poster : "https://www.gateway978.com/wordpress/wp-content/uploads/2017/01/la-la-land-865x433.jpg"
          },
          {
            title : "Whiplash",
            poster : "https://i.ytimg.com/vi/f_bmXeLbr7k/maxresdefault.jpg"
          },
          {
            title : "Zootopia",
            poster : "https://lumiere-a.akamaihd.net/v1/images/rich_zootopia_header_3d918aae.jpeg?region=0,0,2048,1200"
         
          },
          {
            title : "Her",
            poster : "https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/6aX/image/4KXHYT6O5Uzpq4wQx-RPpaB_woY.png"
         
          }
         ]
      })
    }, 5000)
  }


  _renderMovies = () => {

      const movies =  this.state.movies.map((movie,index) => {
          return <Movie title = {movie.title} poster = {movie.poster} key = {index} />
       })

       return movies
   }


  render() {

    return (

    /* 첨에 state가 비어있기 때문에 비어있을 때는 Loading출력하도록. setTimeout에서 5초 뒤에 movie 리스트를 넣었을 때는 무비를 렌더하도록 */
    // 내가 찾는 데이터가 있는지 물어보고 있으면 데이터를 출력하고 없으면 로딩중 메세지 출력

      <div className="App">
         {this.state.movies? this._renderMovies() : 'Loading'}   
      </div>
    );
  }
}

export default App;
