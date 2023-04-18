import React from "react";
import { useState, useEffect } from "react";
import { getRecentMovies } from "../../services/api";
import Cardinfo from "../card/Card";
import "./Peliculas.css";

const Peliculas = () => {
    let [peliculas, setPeliculas] = useState([]);
    useEffect(() => {
        getRecentMovies().then((res) => (setPeliculas(peliculas = res)));
    }, []);
    console.log(peliculas);
    const listPeliculas = peliculas.map((pelicula) => {
        return <Cardinfo key={pelicula.id} pelicula = {pelicula}></Cardinfo>
    })
    return (
      <div className="peliculascom">
        <h2>Peliculas Recientes</h2>
        <div className="listpeliculas">{listPeliculas}</div>
      </div>
    );
}

export default Peliculas;