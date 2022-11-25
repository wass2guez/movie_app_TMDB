import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import Slider from "react-slick";
import axios from "axios";
import MovieCard from "./MovieCard";
import requests from "./requests";
import Rows from "./Rows";
import SearchBar from "../searchBar";

const MoviesDisplay = () => {
  const [movies, setMovies] = useState([]);
  const [alignment, setAlignment] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState('');
  const handleInputSearch = (e)=> {
    const lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase)
 
  }
  const filteredMovies = Object.values(movies).filter((el)=> {
    if (searchInput === '') {
      return el
    }
    else {
      return el.title.toLowerCase().includes(searchInput)
    }
  })
  console.log(filteredMovies)
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  useEffect(() => {
    switch (alignment) {
      case "top-rated":
        axios.get(requests.fetchTopRated).then((response) => {
          setMovies(response.data.results);
        });
        break;

      case "upcoming":
        axios.get(requests.fetchUpcoming).then((response) => {
          setMovies(response.data.results);
        });
        break;
      case "popular":
        axios.get(requests.fetchPopular).then((response) => {
          setMovies(response.data.results);
        });
        break;
      case "now":
        axios.get(requests.fetchNowPlaying).then((response) => {
          setMovies(response.data.results);
        });
        break;
      default:
        axios.get(requests.fetchUpcoming).then((response) => {
          setMovies(response.data.results);
        });
    }
  }, [alignment]);

 

  return (
    <Box sx={{ color: "white" }}>
      <SearchBar  handleInputSearch={handleInputSearch}    />
      <Container maxWidth="lg">
        <Rows setAlignment={setAlignment} alignment={alignment} />
        <Slider {...settings}>
          {filteredMovies.map((el) => {
             return <MovieCard
             poster_path={el.backdrop_path}
             name={el.title}
             date={el.release_date}
             overview={el.overview}
             id = {el.id}
           />
            
          })}
       
        </Slider>
      </Container>
    </Box>
  );
};

export default MoviesDisplay;
