import React from "react";
import {useParams} from "react-router-dom";

const Pelicula = () => {
    let {id, title} = useParams();
    return(
        <div className="pelicula">
            <h2>{id} - {title}</h2>
        </div>
    );
}

export default Pelicula;