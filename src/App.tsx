import { useState, useEffect, useCallback } from "react";
import "./App.css";
import Result from "./Components/Result";
import axios from "axios";
function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalpage, settotalpage] = useState(1);
  const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
  const APIpage = APIURL + page;
  const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
  const SAPI = SEARCHAPI + search + "&page=" + page;

  const Changethesearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setPage(1);
  };

  const getAllMovies = useCallback(() => {
    axios
      .get(APIpage)
      .then((response) => {
        console.log(response.data);
        settotalpage(response.data.total_pages);
        setPage(response.data.page);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [APIpage, settotalpage, setPage, setMovies]);

  const GetSearchMovies = useCallback(() => {
    console.log(SAPI);
    axios
      .get(SAPI)
      .then((response) => {
        console.log(response.data);
        settotalpage(response.data.total_pages);
        setPage(response.data.page);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [SAPI]);

  useEffect(() => {
    if (search === "") {
      getAllMovies();
    } else {
      GetSearchMovies();
    }
  }, [search, page, getAllMovies, GetSearchMovies]);

  const PrevMovie = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };
  const NextMovie = () => {
    if (page !== totalpage) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <div className="container mx-auto border  p-4">
        <div className="flex flex-col gap-10 ">
          <label className="font-bold text-3xl text-yellow-400 ">Search Movies</label>
          <input
            type="text"
            value={search}
            onChange={Changethesearch}
            className="border-2 border-yellow-400 mx-auto  rounded-lg md:w-3/4 w-full  p-3 "
            
          />
        </div>
        <Result movies={movies} />
      </div>
      <div className="flex mt-5 justify-center">
        <div className=" w-full p-4 flex flex-row items-center justify-around md:w-1/2">
          <button className="text-3xl font-semibold" onClick={PrevMovie}>
            Prev
          </button>
          <span className="text-3xl text-slate-500">
            {page} of {totalpage}
          </span>
          <button className="text-3xl font-semibold" onClick={NextMovie}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
