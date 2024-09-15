import { Box, Button, Container, Typography } from "@mui/material";
import Workshops1 from "../../assets/Workshops1.png";
import Workshops2 from "../../assets/Workshops2.png";
import Workshops3 from "../../assets/Workshops3.png";
import countersBG from "../../assets/countersBG.png";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
const useStyles = makeStyles({
  btn: {
    "&:hover": {
      backgroundColor: "rgb(2, 11, 40)",
      color: "#fff",
    },
  },
});
export default function WorkShop() {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          paddingBlock: "20px",
          backgroundColor: "#f2f2f2",
        }}
        component={"section"}
      >
        <Container
          sx={{
            paddingBlock: "20px",
          }}
        >
          <Box className="infoBox">
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontFamily: " Montserrat",
                  fontsize: "24px",
                  fontWeight: "600",
                  lineHeight: "40px",
                  letterSpacing: "-0.10000000149011612px",
                  textAlign: "center",
                  color: "#6E3AD4",
                }}
              >
                {t("join As A Workshop")}
              </Typography>
              <Typography
                sx={{
                  marginBlock: "10px",
                  fontFamily: " Montserrat",
                  fontSize: "40px",
                  fontWeight: "600",
                  lineHeight: "58px",
                  letterSpacing: "-0.10000000149011612px",
                  textAlign: "center",
                  color: "#04113A",
                }}
              >
                {t("We bring a wealth of")}{" "}
                <Typography
                  variant="inherit"
                  sx={{ color: "#3BDBC0" }}
                  component={"span"}
                >
                  {t("Experience")}
                </Typography>{" "}
                {t("from")}
                {i18n.language == "en" ? <br></br> : null}
                {t("a wide rang of backgrounds")}
              </Typography>
              <Typography
                sx={{
                  marginBlock: "40px",
                  fontSize: "24px",
                  fontWeight: "400",
                  lineHeight: "40px",
                  letterSpacing: "-0.10000000149011612px",
                  textAlign: "center",
                  color: "#04113A",
                }}
              >
                {t(
                  "Automechanic connects car owners in Cairo with mechanic services and workshops"
                )}
                <br></br>
                {t(
                  "in their locality, with a list of prices and services, and locations available at the touch of a button."
                )}{" "}
              </Typography>
            </Box>

            <Box
              className="row"
              sx={{
                display: "flex",
                gap: "12px",
                marginTop: "50px",
                flexWrap: { xs: "wrap", md: "nowrap" },
              }}
            >
              <Box className="col" sx={{ width: { xs: "100%", md: "33.33%" } }}>
                <Box component={"div"}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <img
                      src={Workshops1}
                      style={{
                        width: "335px",
                        height: "350px",
                        borderRadius: "24px",
                      }}
                      alt="Workshops1 Image"
                    />
                  </Box>

                  <Typography
                    sx={{
                      marginBlock: "10px",
                      fontFamily: " Montserrat",
                      fontSize: "24px",
                      fontWeight: "600",
                      lineHeight: "48px",
                      letterSpacing: "-0.10000000149011612px",
                      textAlign: "center",
                    }}
                  >
                    {t("Workshop name")}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "400",
                      lineHeight: "40px",
                      letterSpacing: "-0.10000000149011612px",
                      textAlign: "center",
                    }}
                  >
                    {t("workshop field")}
                  </Typography>
                </Box>
              </Box>

              <Box className="col" sx={{ width: { xs: "100%", md: "33.33%" } }}>
                <Box component={"div"}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <img
                      src={Workshops2}
                      style={{
                        width: "335px",
                        height: "350px",
                        borderRadius: "24px",
                      }}
                      alt="Workshops2 Image"
                    />
                  </Box>

                  <Typography
                    sx={{
                      marginBlock: "10px",
                      fontFamily: " Montserrat",
                      fontSize: "24px",
                      fontWeight: "600",
                      lineHeight: "48px",
                      letterSpacing: "-0.10000000149011612px",
                      textAlign: "center",
                    }}
                  >
                    {t("Workshop name")}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "400",
                      lineHeight: "40px",
                      letterSpacing: "-0.10000000149011612px",
                      textAlign: "center",
                    }}
                  >
                    {t("workshop field")}
                  </Typography>
                </Box>
              </Box>
              <Box className="col" sx={{ width: { xs: "100%", md: "33.33%" } }}>
                <Box component={"div"}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={Workshops3}
                      style={{
                        width: "335px",
                        height: "350px",
                        borderRadius: "24px",
                      }}
                      alt="Workshops3 Image"
                    />
                  </Box>

                  <Typography
                    sx={{
                      marginBlock: "10px",
                      fontFamily: " Montserrat",
                      fontSize: "24px",
                      fontWeight: "600",
                      lineHeight: "48px",
                      letterSpacing: "-0.10000000149011612px",
                      textAlign: "center",
                    }}
                  >
                    {t("Workshop name")}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "400",
                      lineHeight: "40px",
                      letterSpacing: "-0.10000000149011612px",
                      textAlign: "center",
                    }}
                  >
                    {t("workshop field")}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                marginBlock: "50px",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  marginBlock: "10px",
                  fontFamily: " Montserrat",
                  fontSize: "24px",
                  fontWeight: "400",
                  lineHeight: "40px",
                  letterSpacing: "-0.10000000149011612px",
                  textAlign: "center",
                }}
              >
                {t("get the app now and join us as a workshop")}
              </Typography>
              <Button
                className={classes.btn}
                variant="contained"
                sx={{
                  width: "281px",
                  height: "48px",
                  borderRadius: "32px",
                  backgroundColor: "#04113A",
                  color: "#fff",
                }}
                disableElevation
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "24px",
                    lineHeight: "24px",
                  }}
                >
                  {t("Get The App")}
                </Typography>
              </Button>
            </Box>
          </Box>
        </Container>

        <Box
          sx={{
            backgroundImage: `url("${countersBG}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            minHeight: "317px",
            padding: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Container>
            <Box
              className="row"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: { md: "24px", xs: "8px" },
              }}
            >
              <Box className="col" sx={{ width: { xs: "45%", md: "249px" } }}>
                <Typography
                  sx={{
                    fontFamily: " Montserrat",
                    fontSize: { xs: "40px", md: "72px" },
                    fontWeight: "600",
                    lineHeight: { xs: "48px", md: "80px" },
                    letterSpacing: "-0.10000000149011612px",
                    textAlign: "center",
                    color: "white",
                  }}
                  component={"h1"}
                >
                  120
                </Typography>
                <Typography
                  sx={{
                    fontFamily: " Montserrat",

                    fontSize: { xs: "16px", md: "24px" },
                    fontWeight: "400",

                    lineHeight: { xs: "24px", md: "40px" },
                    letterSpacing: "-0.10000000149011612px",
                    textAlign: "center",
                    color: "white",
                    marginTop: "10px",
                  }}
                  component={"h1"}
                >
                  {t("Qualified workshops")}
                </Typography>
              </Box>
              <Box className="col" sx={{ width: { xs: "45%", md: "249px" } }}>
                <Typography
                  sx={{
                    fontFamily: " Montserrat",
                    fontSize: { xs: "40px", md: "72px" },
                    fontWeight: "600",
                    lineHeight: { xs: "48px", md: "80px" },
                    letterSpacing: "-0.10000000149011612px",
                    textAlign: "center",
                    color: "white",
                  }}
                  component={"h1"}
                >
                  4
                </Typography>
                <Typography
                  sx={{
                    fontFamily: " Montserrat",
                    fontSize: { xs: "16px", md: "24px" },
                    fontWeight: "400",
                    lineHeight: { xs: "24px", md: "40px" },
                    letterSpacing: "-0.10000000149011612px",
                    textAlign: "center",
                    color: "white",
                    marginTop: "10px",
                  }}
                  component={"h1"}
                >
                  {t("Cities")}
                </Typography>
              </Box>
              <Box className="col" sx={{ width: { xs: "45%", md: "249px" } }}>
                <Typography
                  sx={{
                    fontFamily: " Montserrat",
                    fontSize: { xs: "40px", md: "72px" },
                    fontWeight: "600",
                    lineHeight: { xs: "48px", md: "80px" },
                    letterSpacing: "-0.10000000149011612px",
                    textAlign: "center",
                    color: "white",
                  }}
                  component={"h1"}
                >
                  60
                </Typography>
                <Typography
                  sx={{
                    fontFamily: " Montserrat",
                    fontSize: { xs: "16px", md: "24px" },
                    fontWeight: "400",
                    lineHeight: { xs: "24px", md: "40px" },
                    letterSpacing: "-0.10000000149011612px",
                    textAlign: "center",
                    color: "white",
                    marginTop: "10px",
                  }}
                  component={"h1"}
                >
                  {t("Car Wash centers")}
                </Typography>
              </Box>
              <Box className="col" sx={{ width: { xs: "45%", md: "249px" } }}>
                <Typography
                  sx={{
                    fontFamily: " Montserrat",
                    fontSize: { xs: "40px", md: "72px" },
                    fontWeight: "600",
                    lineHeight: { xs: "48px", md: "80px" },
                    letterSpacing: "-0.10000000149011612px",
                    textAlign: "center",
                    color: "white",
                  }}
                  component={"h1"}
                >
                  69
                </Typography>
                <Typography
                  sx={{
                    fontFamily: " Montserrat",
                    fontSize: { xs: "16px", md: "24px" },
                    fontWeight: "400",
                    lineHeight: { xs: "24px", md: "40px" },
                    letterSpacing: "-0.10000000149011612px",
                    textAlign: "center",
                    color: "white",
                    marginTop: "10px",
                  }}
                  component={"h1"}
                >
                  {t("Batteries Workshops & Tires")}
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
