import React from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

class Movie extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movie: null,
    };
  }
 
  componentDidMount() {
    this.getMovie(this.props.match.params.id)
  }

  UNSAFE_componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id){
      this.getMovie(newProps.match.params.id);     
    }
  }
      
  getMovie = (id) => {
      
    axios.get(`http://localhost:5000/api/movies/${id}`)

        .then(response => {
          this.setState(() => ({movie: response.data}));
        })

        .catch(error => {
          console.error("uh oh ", error);
        })
  }
  
          // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

  
  // Uncomment this only when you have moved on to the stretch goals
  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie)
  }

render(){

  if(!this.state.movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className='save-wrapper'>
      <MovieCard movie={this.state.movie} />
      <div className='save-button' onClick={this.saveMovie}>Save</div>
    </div>
  );
}
}

export default Movie;
