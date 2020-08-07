import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {
  CardMedia,
  CardActionArea,
  IconButton,
  Hidden,
} from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useGalleryState } from "./GalleryContext";

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    minWidth: 350,
    margin: 10,
    display: "flex",
    border: `${props.borderWidth || 5} solid ${
      theme.palette.primary.secondary
    }`,
  }),
  actionArea: {
    display: "flex",
  },
  media: (props) => ({
    height: window.innerWidth > 700 ? "calc(100vh - 80px)" : "60vh",
    width: "100%",
    border: `${props.borderWidth || 5} solid ${
      theme.palette.primary.secondary
    }`,
    objectFit: "contain",
  }),
}));

export default function SimpleCard({ picture }) {
  const classes = useStyles(picture);

  const { state, dispatch } = useGalleryState();

  function handlePrevClick(e) {
    e.preventDefault();
    dispatch({ type: "move-backward" });
  }

  function handleNextClick(e) {
    e.preventDefault();
    dispatch({ type: "move-forward" });
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Hidden smDown>
          <IconButton onClick={handlePrevClick}>
            <NavigateBeforeIcon />
          </IconButton>
        </Hidden>
        <CardMedia
          className={classes.media}
          image={picture.link !== undefined ? picture.link : ""}
        />
        <Hidden smDown>
          <IconButton onClick={handleNextClick}>
            <NavigateNextIcon />
          </IconButton>
        </Hidden>
      </CardActionArea>
    </Card>
  );
}
