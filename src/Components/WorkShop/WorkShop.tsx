import { Box, Button, Container, Typography } from "@mui/material";
import Workshops1 from "../../assets/Workshops1.png";
import Workshops2 from "../../assets/Workshops2.png";
import Workshops3 from "../../assets/Workshops3.png";
import countersBG from "../../assets/countersBG.png";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  btn: {
    "&:hover": {
      backgroundColor: "rgb(2, 11, 40)",
      color: "#fff",
    },
  },
});
export default function WorkShop() {
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
                join As A Workshop
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
                We bring a wealth of{" "}
                <Typography
                  variant="inherit"
                  sx={{ color: "#3BDBC0" }}
                  component={"span"}
                >
                  Experience
                </Typography>{" "}
                from<br></br>a wide rang of backgrounds
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
                Automechanic connects car owners in Cairo with mechanic services
                and workshops<br></br> in their locality, with a list of prices
                and services, and locations available at the touch of a button.
              </Typography>
            </Box>

            <Box
              className="row"
              sx={{ display: "flex", gap: "12px", marginTop: "50px" }}
            >
              <Box className="col" sx={{ width: "33.33%" }}>
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
                    Workshop name
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
                    workshop field
                  </Typography>
                </Box>
              </Box>

              <Box className="col" sx={{ width: "33.33%" }}>
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
                    Workshop name
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
                    workshop field
                  </Typography>
                </Box>
              </Box>
              <Box className="col" sx={{ width: "33.33%" }}>
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
                    Workshop name
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
                    workshop field
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                marginBlock: "50px",
                display: "flex",
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
                get the app now and join us as a workshop
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
                  Get The App
                </Typography>
              </Button>
            </Box>
          </Box>
        </Container>

        <Box
          sx={{
            backgroundImage: `url("${countersBG}")`,
            height: "317px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "cover",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Container>
            <Box className="row" sx={{ display: "flex" }}>
              <Box className="col" sx={{ width: "25%" }}>
                <Typography
                  sx={{
                    fontFamily: " Montserrat",
                    fontSize: "72px",
                    fontWeight: "600",
                    lineHeight: "80px",
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
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "40px",
                    letterSpacing: "-0.10000000149011612px",
                    textAlign: "center",
                    color: "white",
                    marginTop: "10px",
                  }}
                  component={"h1"}
                >
                  Qualified workshops
                </Typography>
              </Box>
              <Box className="col" sx={{ width: "25%" }}>
                <Typography
                  sx={{
                    fontFamily: " Montserrat",
                    fontSize: "72px",
                    fontWeight: "600",
                    lineHeight: "80px",
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
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "40px",
                    letterSpacing: "-0.10000000149011612px",
                    textAlign: "center",
                    color: "white",
                    marginTop: "10px",
                  }}
                  component={"h1"}
                >
                  Cities
                </Typography>
              </Box>
              <Box className="col" sx={{ width: "25%" }}>
                <Typography
                  sx={{
                    fontFamily: " Montserrat",
                    fontSize: "72px",
                    fontWeight: "600",
                    lineHeight: "80px",
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
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "40px",
                    letterSpacing: "-0.10000000149011612px",
                    textAlign: "center",
                    color: "white",
                    marginTop: "10px",
                  }}
                  component={"h1"}
                >
                  Car Wash centers
                </Typography>
              </Box>
              <Box className="col" sx={{ width: "25%" }}>
                <Typography
                  sx={{
                    fontFamily: " Montserrat",
                    fontSize: "72px",
                    fontWeight: "600",
                    lineHeight: "80px",
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
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "40px",
                    letterSpacing: "-0.10000000149011612px",
                    textAlign: "center",
                    color: "white",
                    marginTop: "10px",
                  }}
                  component={"h1"}
                >
                  Qualified workshops
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
