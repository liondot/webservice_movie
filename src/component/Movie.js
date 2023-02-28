import PropTypes from "prop-types"
import { Link } from "react-router-dom"


function Movie({ id,title, mediumCoverImage, summary, genres}) {
  console.log(title)
    return (
      <div>
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
            <img src={mediumCoverImage} alt={title}/>
            <p>{summary.length > 50 ? `${summary.slice(0, 50)}...` : summary}</p>
            <ul>
              {genres.map((gen) => <li key={gen}>{gen} </li>)}
            </ul>
      </div>
    )
}

Movie.prototype ={
  id:PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    mediumCoverImage : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie