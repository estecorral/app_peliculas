import React from "react";
import "./Home.css";
import peliculasJSON from "../../assets/peliculas.json";
import seriesJSON from "../../assets/series.json";
import Cardinfo from "../card/Card";

const Home = () => {
    const peliculas = peliculasJSON.slice(0, 5);
    const series = seriesJSON.slice(0, 5);
    const listPeliculas = peliculas.map((pelicula) => {
        console.log(pelicula);
        return(<Cardinfo key={pelicula.id} pelicula = {pelicula}/>)
    });
    return(
        <div className="home">
            <h2>Peliculas Recientes</h2>
            <div className="peliculas">
            {listPeliculas}
            </div>
            <h2>Series Recientes</h2>
            <div className="series">
            {series.map((serie) => {
                return(<Cardinfo key={series.id} serie = {serie}/>)
            })}
            </div>
        </div>
    );
}

export default Home;