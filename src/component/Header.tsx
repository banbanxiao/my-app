"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className="bg-white text-black">
      <Toolbar>
        <Typography variant="h6" component="div" className="text-center">
          B.log
        </Typography>
        <div className="flex-grow" />

        <div className="hidden md:flex">
          <Button color="inherit">バイク</Button>
          <Button color="inherit">プロダクト</Button>
          <Button color="inherit">Contact</Button>
        </div>
        <div className="flex-grow" />
        <div className="flex md:hidden justify-center">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>バイク</MenuItem>
            <MenuItem onClick={handleMenuClose}>プロダクト</MenuItem>
            <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <IconButton edge="start" color="inherit" aria-label="twitter">
                <TwitterIcon />
              </IconButton>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <IconButton edge="start" color="inherit" aria-label="instagram">
                <InstagramIcon />
              </IconButton>
            </MenuItem>
          </Menu>
        </div>
        <div className="hidden md:flex space-x-4">
          <IconButton edge="start" color="inherit" aria-label="twitter">
            <TwitterIcon />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="instagram">
            <InstagramIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;