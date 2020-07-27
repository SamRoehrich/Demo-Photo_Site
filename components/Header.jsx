import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import Link from "next/link";

const useStyles = makeStyles(() => ({
  textStyles: {
    color: "rgba(0, 0, 0, 0.87)",
    // marginLeft: "60px",
    margin: "0 auto",
    fontWeight: 500,
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

function handleInstaIconClick() {
  window.open("https://www.instagram.com/kylegarrettphoto/");
}

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Button onClick={handleInstaIconClick}>
          <InstagramIcon color="action" />
        </Button>
        <Link href="/">
          <Typography className={classes.textStyles} variant="h5">
            Kyle Garrett Photography
          </Typography>
        </Link>
        <DropDownMenu />
      </Toolbar>
    </AppBar>
  );
};

const DropDownMenu = () => {
  const [open, setOpen] = useState(null);

  function handleBurgerIconClick(event) {
    setOpen(event.currentTarget);
  }

  function handleClose() {
    setOpen(null);
  }

  return (
    <div>
      <Button onClick={handleBurgerIconClick}>
        <MenuIcon color="action" />
      </Button>
      <Menu
        id="dropdown-menu"
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
      >
        <Link href="/climbing">
          <MenuItem onClick={handleClose}>Climbing</MenuItem>
        </Link>
        <Link href="/portraits">
          <MenuItem onClick={handleClose}>Portraits</MenuItem>
        </Link>
        <Link href="/notclimbing">
          <MenuItem onClick={handleClose}>Not Climbing</MenuItem>
        </Link>
        <Link href="/about">
          <MenuItem onClick={handleClose}>About</MenuItem>
        </Link>
        <Link href="/contact">
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Header;
