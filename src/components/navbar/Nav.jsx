import {
  Container,
  AppBar,
  useMediaQuery,
  Toolbar,
  IconButton,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { MenuDesktop, MenuMobile } from "./Menu";
import { theme } from "../../style";

const Nav = () => {
  const matches = useMediaQuery(theme.breakpoints.down("tablet"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Container>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#ffffff",
            display: "flex",
            boxShadow: "none",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton edge="start" color="inherit" disableRipple>
              <Stack
                sx={{
                  width: { xs: 90, sm: 120, md: 140, lg: 200 },
                  //   height: { xs: 100, sm: 200, md: 100, lg: 600 },
                }}
              >
                <img src="../../src/assets/Small img/Logo.jpg" alt="LOGo" />
              </Stack>
            </IconButton>
            {!matches && (
              <MenuDesktop
                anchorEl={anchorEl}
                open={open}
                handleClick={handleClick}
                handleClose={handleClose}
              />
            )}
            {matches && (
              <MenuMobile
                anchorEl={anchorEl}
                open={open}
                handleClick={handleClick}
                handleClose={handleClose}
              />
            )}
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
};

export default Nav;
