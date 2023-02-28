import { useEffect, useState } from "react"
import Movie from "../component/Movie"
import styles from "./Home.module.css";

function Home() {
const [loading, setLoading] = useState(true)
const [addMovies, setMovie] = useState([])
 
  const getMovie = async () =>{
    const response = await fetch (
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.&sort_by=year`
    )
    const json = await response.json()
    setMovie(json.data.movies)
    setLoading(false)
  }
  useEffect(() => {
    getMovie()
  }, [])

  return (
    <div>
      <div className={styles.main}>{loading ? 
        <strong className={styles.load}>loading....</strong>  :
        <div className={styles.container}> 
          {addMovies.map((movie) => 
          <div key={movie.id} className={styles.movie}>
            <Movie
            id={movie.id}
            key={movie.id}
            title={movie.title}
            mediumCoverImage={movie.medium_cover_image} 
            summary={movie.summary}
            genres={movie.genres} 
            />
          </div>
       )
          }
        </div>}</div>
     </div>
  );

}

export default Home