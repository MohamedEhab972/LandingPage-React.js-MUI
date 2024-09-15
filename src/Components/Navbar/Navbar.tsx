import * as React from "react";
import flag from "../../assets/ar.svg";
import flagEn from "../../assets/EN.svg";
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
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import { useContext } from "react";
import { langContext } from "../../context/LangContext";
import Cookies from "js-cookie";

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
  const { setlang }: any = useContext(langContext);
  const { t, i18n } = useTranslation();
  const pages = [t("About"), t("News"), t("Contact Us"), t("Services")];
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
      sx={{
        backgroundColor: "#04113A",
        boxShadow: "none",
        position: "absolute",
        top: "0",
      }}
      className={classes.NavStyle}
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
              <MenuItem>
                {i18n.language == "en" && (
                  <Button
                    onClick={() => {
                      i18n.changeLanguage("ar");
                      setlang(Cookies.get("i18next") || "en");
                      setAnchorElNav(null);
                    }}
                    sx={{
                      gap: "8px",
                      display: { md: "flex", gap: "8px" },
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
                      sx={{
                        display: { md: "flex", gap: "8px" },
                        fontFamily: "Roboto",
                        fontWeight: 600,
                        color: "black",
                        textDecoration: "none",
                        fontSize: "16px",
                        lineHeight: "16px",
                      }}
                    >
                      AR
                    </Typography>
                  </Button>
                )}
                {i18n.language == "ar" && (
                  <Button
                    onClick={() => {
                      i18n.changeLanguage("en");
                      setlang(Cookies.get("i18next") || "en");
                      setAnchorElNav(null);
                    }}
                    sx={{
                      gap: "8px",
                      display: { md: "flex", gap: "8px" },
                    }}
                  >
                    <img
                      src={flagEn}
                      style={{ width: "24px", height: "15.72px" }}
                      alt="en flag"
                    />
                    <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      sx={{
                        display: { md: "flex", gap: "8px" },
                        fontFamily: "Roboto",
                        fontWeight: 600,
                        color: "black",
                        textDecoration: "none",
                        fontSize: "16px",
                        lineHeight: "16px",
                      }}
                    >
                      EN
                    </Typography>
                  </Button>
                )}
              </MenuItem>
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
                {i18n.language == "en" && (
                  <Button
                    onClick={() => {
                      i18n.changeLanguage("ar");
                      setlang(Cookies.get("i18next") || "en");
                    }}
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
                      sx={{
                        display: { xs: "none", md: "flex", gap: "8px" },
                        fontFamily: "Roboto",
                        fontWeight: 600,
                        color: "white",
                        textDecoration: "none",
                        fontSize: "16px",
                        lineHeight: "16px",
                      }}
                    >
                      AR
                    </Typography>
                  </Button>
                )}
                {i18n.language == "ar" && (
                  <Button
                    onClick={() => {
                      i18n.changeLanguage("en");
                      setlang(Cookies.get("i18next") || "en");
                    }}
                    sx={{
                      gap: "8px",
                      display: { xs: "none", md: "flex", gap: "8px" },
                    }}
                  >
                    <img
                      src={flagEn}
                      style={{ width: "24px", height: "15.72px" }}
                      alt="en flag"
                    />
                    <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      sx={{
                        display: { xs: "none", md: "flex", gap: "8px" },
                        fontFamily: "Roboto",
                        fontWeight: 600,
                        color: "white",
                        textDecoration: "none",
                        fontSize: "16px",
                        lineHeight: "16px",
                      }}
                    >
                      EN
                    </Typography>
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
