import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

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
  },
  buttonPrimary: {
    width: "100%",

  },
  loading: {
    width: "100%",
    marginTop: 50,
    marginBottom: 50,
  },
  catPictures: {
    marginTop: 75,
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
    fetch(`https://api.thecatapi.com/v1/images/search?page=${page}&limit=12`, {
      method: "GET",
      headers: new Headers({
        "x-api-key": "97493ec6-5863-4b69-b5d5-2ff36f422d34",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setCatPictures(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [page]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {isLoading ? (
        <p className={classes.loading}>Wait I'm Loading Cats for you UwU </p>
      ) : (
        <div>
          <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
              {catPictures.map((cat) => (
                <GridListTile key={cat.url} cols={cat.cols || 1}>
                  <img src={cat.url} alt={cat.id} />
                </GridListTile>
              ))}
            </GridList>
          </div>
          <Button
            className={classes.buttonPrimary}
            variant="contained"
            color="primary"
            onClick={loadMoreCats}
          >
            Load More Cats
          </Button>
        </div>
      )}
    </div>
  );
};
