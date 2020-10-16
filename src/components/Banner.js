import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../requests'
import './Banner.css';

function Banner() {
    const [movie,setMovie]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(requests.fetchNetflixOrignals);
            setMovie(request.data.results[
                Math.floor(Math.random()*request.data.results.length-1)
            ]);
            return request;
        }
        fetchData();

    },[]);
    //console.log(movie);

    function truncate(str,n){
        return str?.length>n? str.substr(0,n-1)+"...":str;
    }


  return (
      <header className="banner"
        style={{
            backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        }}
      >
          <div className="banner_contents">
              <h1 className="banner_title">
                {movie?.title|| movie?.name || movie?.original_name }
              </h1>
              <div className="banner_buttons">
                  <button className="banner_button">Play</button>
                  <button className="banner_button">My List</button>
              </div>
              <h1 className="banner_description">
                  {truncate(movie?.overview,300)}
              </h1>
          </div>
          <div  className="banner-fadebottom"></div>
      </header>
  );
}

export default Banner;