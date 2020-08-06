import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardMedia, CardActionArea, IconButton } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useGalleryState } from "./GalleryContext";

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    margin: 10,
    marginLeft: 50,
    display: "flex",
  },
  button: {
    backgroundColor: "none",
  },
  media: {
    height: "calc(100vh - 80px)",
    border: "25px solid white",
  },
});

export default function SimpleCard({ picture }) {
  const classes = useStyles();

  const { state, dispatch } = useGalleryState();

  function handlePrevClick(e) {
    e.preventDefault();
    dispatch({ type: "move-backward" });
  }

  function handleNextClick(e) {
    e.preventDefault();
    dispatch({ type: "move-forward" });
  }
  console.log(picture);
  return (
    <Card className={classes.root}>
      <IconButton onClick={handlePrevClick} className={classes.button}>
        <NavigateBeforeIcon />
      </IconButton>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={picture.link !== undefined ? picture.link : ""}
        />
      </CardActionArea>
      <IconButton onClick={handleNextClick}>
        <NavigateNextIcon />
      </IconButton>
    </Card>
  );
}