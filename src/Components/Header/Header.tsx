import { Box, Button, Typography } from "@mui/material";
import backgroundHeader from "../../assets/backgroundHeader.png";
import iPhoneAr from "../../assets/iPhone.png";
import AndroidIcon from "../../assets/AndroidIcon.svg";
import AppleIcon from "../../assets/AppleIcon.svg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    "&:hover": {
      backgroundColor: "rgb(2, 11, 40)",
      color: "#fff",
    },
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <Box
        component="header"
        sx={{
          width: "100%",
          minHeight: "100%",
          backgroundImage: `url("${backgroundHeader}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          textAlign: {
            xs: "center",
            md: "start",
          },
        }}
      >
        <Box
          className="col"
          sx={{
            width: {
              xs: "100%",
              md: "50%",
            },
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              component={"h1"}
              sx={{
                fontWeight: "700",
                fontSize: "48px",
                lineHeight: "26px",
                letterSpacing: "-0.1px",
                color: "#FFFFFF",
                marginBottom: "20px",
              }}
            >
              Auto mechanic
            </Typography>
            <Typography
              component={"h2"}
              sx={{
                fontWeight: "600",
                fontSize: "48px",
                lineHeight: "64px",
                letterSpacing: "-0.1px",
                color: "#FFFFFF",
              }}
            >
              your{" "}
              <Typography variant="inherit" component={"span"} color="#3BDBC0">
                #1 car
              </Typography>
              <br></br> servicing app
            </Typography>

            <Button
              className={classes.btn}
              variant="contained"
              sx={{
                width: "281px",
                height: "48px",
                borderRadius: "32px",
                backgroundColor: "#FFFFFF",
                marginTop: "40px",
                color: "#04113A",
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

            <Box sx={{ mt: "30px" }}>
              <Typography color="white" sx={{ mb: "10px" }}>
                Download Now
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "10.35px",
                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },
                  alignItems: "center",
                }}
              >
                <Button
                  href="https://www.apple.com/app-store/"
                  className={classes.btn}
                  sx={{
                    display: "flex",
                    backgroundColor: "#FFFFFF",
                    color: "#04113A",
                    width: {
                      xs: "100%",
                      md: "210.57px",
                    },
                    height: "61.16px",
                    borderRadius: "10px",
                  }}
                  variant="contained"
                  disableElevation
                >
                  <img
                    src={AppleIcon}
                    style={{
                      width: "28.42px",
                      height: "34.84px",
                      marginRight: "10px",
                    }}
                    alt="AppleIcon   "
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      component={"p"}
                      sx={{ fontSize: "10px", fontWeight: "700" }}
                    >
                      Download on the
                    </Typography>
                    <Typography
                      component={"p"}
                      sx={{
                        fontSize: {
                          md: "18px",
                          sm: "22px",
                        },
                        fontWeight: "600",
                      }}
                    >
                      App Store
                    </Typography>
                  </Box>
                </Button>

                <Button
                  href="https://play.google.com/store/games?device=windows"
                  className={classes.btn}
                  sx={{
                    display: "flex",
                    backgroundColor: "#FFFFFF",
                    color: "#04113A",
                    width: {
                      xs: "100%",
                      md: "210.57px",
                    },
                    height: "61.16px",
                    borderRadius: "10px",
                  }}
                  variant="contained"
                  disableElevation
                >
                  <img
                    src={AndroidIcon}
                    style={{
                      width: "28.42px",
                      height: "34.84px",
                      marginRight: "10px",
                    }}
                    alt="AndroidIcon"
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      component={"p"}
                      sx={{ fontSize: "10px", fontWeight: "700" }}
                    >
                      GET IT ON
                    </Typography>
                    <Typography
                      component={"p"}
                      sx={{
                        fontSize: {
                          md: "18px",
                          sm: "22px",
                        },
                        fontWeight: "600",
                      }}
                    >
                      Google Play
                    </Typography>
                  </Box>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          className="col"
          sx={{
            width: "50%",
          }}
        >
          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
              marginTop: "60px",
              width: "50%",
              position: "absolute",
              top: "130px",
              right: "3px",
            }}
          >
            <img src={iPhoneAr} alt="Iphone img" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
