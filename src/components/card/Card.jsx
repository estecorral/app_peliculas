import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cardinfo = (props) => {
    let image = "";
    const navigate = useNavigate();
    const goToPelicula = () => {
      if (props.pelicula) {
        navigate(`/pelicula/${props.pelicula.id}/${props.pelicula.title}`);
      }
    }
    if (props.pelicula) {
        image =
          "https://image.tmdb.org/t/p/w220_and_h330_face/" +
          props.pelicula.poster_path;
    } else if (props.serie) {
        image =
          "https://image.tmdb.org/t/p/w220_and_h330_face/" +
          props.serie.poster_path;
    }
    console.log(props);
    return (
      <div>
        <Button onClick={goToPelicula}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                image={image}
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Button>
      </div>
    );
}

export default Cardinfo;