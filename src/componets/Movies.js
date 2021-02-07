import React from 'react'
const defaultImage="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
const Movies = ({data}) => {
    const {title,vote_average,poster_path,overview,release_date}=data
    const IMG_API="https://image.tmdb.org/t/p/w500"
const setVoteClass=(vote)=>{
if(vote>=7){return "badge badge-success"}
else if(vote<7&&vote>=4){
    return "badge badge-warning"
}
else{return "badge badge-danger"}
}
    return (
        <div className="movie">
             <img src={poster_path?`${IMG_API}${poster_path}`:defaultImage} alt={title} />
             <div className="movie-info">
                 <h4>{title}</h4>
                 <div className="d-flex flex-column">
                    <span className="font-italic text-secondary">{release_date.split("-")[0]}</span>
                    <span className={setVoteClass(vote_average)}>rate: {vote_average}</span>
                 </div>
            </div>
            <div className="movie-over">
                <h3>Overview</h3>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movies
