
import { useState,useEffect } from 'react'
import './App.css'
import Result from './Components/Result'
import axios from 'axios'
function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('')
  const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
  const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
  const getAllMovies = ( ) =>{
    axios.get(APIURL)
    .then(
      (response) =>{
        console.log(response.data.results)
        setMovies(response.data.results)
      }
    )
    .catch(
      (error) => {console.log(error)}
    )
  }

  const Changethesearch = (event:any) =>{
    setSearch(event.target.value)
    
  }
  const getSearchMovies = () =>{
    axios.get(SEARCHAPI+search)
    .then(
      (response) =>{
        console.log(response.data.results)
        setMovies(response.data.results)
      }
    )
    .catch(
      (error) => {console.log(error)}
    )
  }
  useEffect(() => {
    if(search===""){
      getAllMovies()
    }else{
      getSearchMovies()
    }
  }, [search])
  

  return (
    <>
      <div className='container mx-auto border  p-4'>
        <div className='flex flex-col gap-10 '>
        <label className='font-bold text-2xl '>Search Movies</label>
        <input type='text' value={search} onChange={Changethesearch} className='border mx-auto border-slate-600 rounded-2xl w-1/2  p-3'/></div>
        <Result movies={movies}/>
      </div>
    </>
  )
}

export default App
