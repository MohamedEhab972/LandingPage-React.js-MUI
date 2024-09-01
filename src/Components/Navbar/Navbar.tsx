import * as React from "react";
import flag from "../../assets/ar.svg";
import logo from "../../assets/logo.svg";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@mui/styles";

const pages = ["About", "News", "Contact Us", "Services"];

const useStyles = makeStyles({
  NavStyle: {
    height: "96px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  TypStyle: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "26px",
    letterSpacing: "-0.1px",
    // "&:hover":{}
  },
});

function Navbar() {
  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{ backgroundColor: "#04113A" }}
      className={classes.NavStyle}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ paddingInline: "30px" }}>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              sx={{ padding: "0" }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "26px",
                      letterSpacing: "-0.1px",
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>

            <img
              src={logo}
              alt="logo"
              style={{
                width: "131px",
                height: "64px",
                flexGrow: "1",
              }}
            />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "8px",
              },
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "131px", height: "64px" }}
            />

            <Box sx={{ display: "flex", gap: "32px" }}>
              {pages.map((page) => (
                <MenuItem
                  sx={{ padding: "8px" }}
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <Typography className={classes.TypStyle}>{page}</Typography>
                </MenuItem>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Box
                sx={{
                  gap: "8px",
                  display: { xs: "none", md: "flex", gap: "8px" },
                }}
              >
                <img
                  src={flag}
                  style={{ width: "24px", height: "15.72px" }}
                  alt="en flag"
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    display: { xs: "none", md: "flex", gap: "8px" },
                    fontFamily: "Roboto",
                    fontWeight: 600,
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: "16px",
                    lineHeight: "16px",
                  }}
                >
                  AR
                </Typography>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
