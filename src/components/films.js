import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPopularFilms} from '../actions/index';
import {Link} from 'react-router';

class Films extends Component {

  componentWillMount() {
    this.props.fetchPopularFilms();
  }

  renderList() {
    return this.props.films.map((film) => {

      const imageUrl = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${film.poster_path}`;

      return (
        <div className="card" key={film.id}>
          <img className="card-img-top" src={imageUrl} alt="Card image cap" />
          <div className="card-block">
            <p className="card-text"><strong>{film.title}</strong></p>
            <Link to={`/film/${film.id}`} className="btn btn-primary">More Details</Link>
          </div>
        </div>
      );
    });
  }

  render() {
    return(
      <div id="container">
        {this.renderList()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    films: state.films
  }
}

export default connect(mapStateToProps, {fetchPopularFilms})(Films);
