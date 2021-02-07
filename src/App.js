// import './App.css';
import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './componets/Movies'
import './App.css'
import axios from 'axios'

const FEATURE_API="https://api.themoviedb.org/3/discover/movie?sort_by=popularity-desc&api_key=b6ed159a63cbe17279b5fc955c2a41a2&page=1"
const SEARCH_API="https://api.themoviedb.org/3/search/movie?api_key=b6ed159a63cbe17279b5fc955c2a41a2&query="

function App() {
  // const movies=[1,2,3]
  const [movies, setMovies] = useState([]);
  const [searchTearm, setSearchTearm] = useState('');
  const getMovies=(API)=>{
    axios.get(API)
    .then(res=>setMovies(res.data.results))
    .catch(err=>console.log("err",err))
  }
  useEffect(() => {
    getMovies(FEATURE_API)
  }, []);
const handleOnsubmit=(e)=>{
e.preventDefault()
if(e.target.value!==""){
  getMovies(SEARCH_API+searchTearm)
 
}
  
  
}
const handleChange=(e)=>{
  setSearchTearm(e.target.value)
  if(e.target.value==""){
    getMovies(FEATURE_API)
   }
}
  return (
    <div className="root">
      <header className="header">
        <form onSubmit={handleOnsubmit}>
          <input className="search" type="text" value={searchTearm} placeholder="Search" onChange={handleChange}/>
        </form>
      </header>
      <div className="movie-container">
        {movies.map(el=><Movie key={el.id} data={el}/>)}
     </div>
    </div>
    
    
  );
}

export default App;
