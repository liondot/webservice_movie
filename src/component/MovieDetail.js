import PropTypes from "prop-types"
import styles from "../routes/Detail.module.css";


function MovieDetail({large_cover_image, small_cover_image, year,download_count, description_full, title, genres}) {
    return(
        <div className={styles.box}>  
    <img className={styles.largeImg}
    src={large_cover_image}
    alt={large_cover_image}
  />
    <div>
      <div className={styles.title_img}>
    <img className={styles.smallImg}
    src={small_cover_image}
    alt={small_cover_image}
  />
  <div className={styles.titleCon}>
   <h1 className={styles.title}>{title}</h1> 
   <div className={styles.info}>
                  <span>{year}년 /</span>
                    <span>전체 다운로드: {download_count} 회</span>
                </div>
   </div>
   </div>
    </div>
                
                <div className={styles.genresTitle}>
                  <span> 분야 : </span>
              {genres.map((g) => (
                
                <span key={g} className={styles.genres}> <ul>
                  <li>{g}</li>
                  </ul> </span>
              ))}
            </div>

              <div>
            <div>{description_full}</div>
          </div>
              
   </div>
    )
}

MovieDetail.prototype ={
    large_cover_image : PropTypes.string.isRequired,
    small_cover_image : PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    runtime:PropTypes.number.isRequired,
    download_count: PropTypes.number.isRequired,
    description_full: PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default MovieDetail