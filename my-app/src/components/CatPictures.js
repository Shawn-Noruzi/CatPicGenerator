import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

export const CatPictures = () => {
  const [page, setPage] = useState(1);
  const [catPictures, setCatPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadMoreCats = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search`, {
      method: "GET",
      headers: new Headers({
        "x-api-key": "97493ec6-5863-4b69-b5d5-2ff36f422d34",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setCatPictures(response.items);
        console.log(catPictures);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [page]);
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" component="h2">
        Cat Pictures
      </Typography>
      {/* <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div> */}
    </div>
  );
};
