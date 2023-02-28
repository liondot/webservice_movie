import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MovieDetail from "../component/MovieDetail"
import styles from "./Detail.module.css";


function Detail(){
    const {id} = useParams()    

    const [loading, setLoading] = useState(true)
    const [movieDetails, setMovieDetail] = useState([])
    const [genres, setGenres] = useState([]);

    
    const getMovie = useCallback(async () => {
        const json = await (
          await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
       
        setLoading(false); //(current) => !current
        setMovieDetail(json.data.movie);
        setGenres(json.data.movie.genres); 
        console.log(json)
      }, [id]);

      useEffect(() => {
        if (id !== "" && id.length > 1) {
          getMovie();
        }
      }, [getMovie, id]); 

   return(
  <div className={styles.detail}>
   <h3>{loading ? <strong>loading....</strong> : 
   <div className={styles.container}>
    <MovieDetail
              large_cover_image={movieDetails.large_cover_image}
              small_cover_image={movieDetails.small_cover_image}
              year={movieDetails.year}
              download_count={movieDetails.download_count}
              description_full={movieDetails.description_full}
              title={movieDetails.title}
              genres={movieDetails.genres}
              />
              </div>
      }
   </h3>
   </div>
   )
}
 
export default Detail