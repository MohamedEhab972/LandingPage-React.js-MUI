import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import AppleIcon from "../../assets/AppleIcon.svg";
import AndroidIcon from "../../assets/AndroidIcon.svg";
import FooterBg from "../../assets/FooterBg.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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

export default function Footer() {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url("${FooterBg}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
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
          <Box
            className="row"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "30px",
            }}
          >
            <Box className="col" sx={{ width: { md: "20%", xs: "100%" } }}>
              <Box className="info">
                <Typography
                  component={"h1"}
                  variant="h3"
                  sx={{
                    fontSize: { xs: "2rem", md: "15px" },
                    color: "white",
                  }}
                >
                  {t("about")}
                </Typography>
                <Typography
                  component={"p"}
                  sx={{
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "26px",
                    letterSpacing: "-0.1px",
                    color: "#FFFFFF",
                    marginTop: "20px",
                  }}
                >
                  Our Vision We vow to save lives, time, and money, by making
                  car care easy for everyone across Egypt and the Middle East.
                </Typography>
                <Box
                  className="icons"
                  sx={{
                    display: "flex",
                    gap: "25px",
                    color: "white",
                    marginTop: "30px",
                  }}
                >
                  <IconButton color="inherit" href="https://twitter.com">
                    <TwitterIcon fontSize="medium" />
                  </IconButton>
                  <IconButton color="inherit" href="https://facebook.com">
                    <FacebookIcon fontSize="medium" />
                  </IconButton>
                  <IconButton color="inherit" href="https://linkedin.com">
                    <LinkedInIcon fontSize="medium" />
                  </IconButton>
                  <IconButton color="inherit" href="https://instagram.com">
                    <InstagramIcon fontSize="medium" />
                  </IconButton>
                </Box>
              </Box>
            </Box>

            <Box
              className="col"
              sx={{
                width: { md: "20%", xs: "100%" },
                paddingLeft: { md: "40px" },
              }}
            >
              <Typography
                component={"p"}
                sx={{
                  fontWeight: "400",
                  fontSize: { xs: "2rem", md: "15px" },
                  lineHeight: "26px",
                  letterSpacing: "-0.1px",
                  color: "#FFFFFF",
                  opacity: { xs: "1", md: "0.65" },
                  mb: "20px",
                }}
              >
                {t("Company")}
              </Typography>
              <Typography
                component={"h5"}
                sx={{
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "40px",
                  letterSpacing: "-0.2px",
                  color: "#FFFFFF",
                }}
              >
                About us
              </Typography>
              <Typography
                component={"h5"}
                sx={{
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "40px",
                  letterSpacing: "-0.2px",
                  color: "#FFFFFF",
                }}
              >
                News
              </Typography>
              <Typography
                component={"h5"}
                sx={{
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "40px",
                  letterSpacing: "-0.2px",
                  color: "#FFFFFF",
                }}
              >
                Contact Us
              </Typography>
              <Typography
                component={"h5"}
                sx={{
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "40px",
                  letterSpacing: "-0.2px",
                  color: "#FFFFFF",
                }}
              >
                Services
              </Typography>
              <Typography
                component={"h5"}
                sx={{
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "40px",
                  letterSpacing: "-0.2px",
                  color: "#FFFFFF",
                }}
              >
                Privacy Policy
              </Typography>
              <Typography
                component={"h5"}
                sx={{
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "40px",
                  letterSpacing: "-0.2px",
                  color: "#FFFFFF",
                }}
              >
                Refund & Cancellation
              </Typography>
              <Typography
                component={"h5"}
                sx={{
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "40px",
                  letterSpacing: "-0.2px",
                  color: "#FFFFFF",
                }}
              >
                Terms & Conditions
              </Typography>
            </Box>
            <Box className="col" sx={{ width: { md: "50%", xs: "100%" } }}>
              <Typography
                component={"h1"}
                variant="h3"
                sx={{
                  fontSize: { xs: "2rem", md: "15px" },
                  mb: "20px",
                  color: "white",
                }}
              >
                {t("Contact Information")}
              </Typography>
              <Typography
                component={"h5"}
                sx={{
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "40px",
                  letterSpacing: "-0.2px",
                  color: "#FFFFFF",
                }}
              >
                For inquiries , leave your message and w'll get back to you
                shortly.<br></br> Automechanic HQ <br></br>Address : 4 Dr
                Soliman Square Dukii , Giza<br></br> Phone : 01113005090{" "}
                <br></br>Email : info@automechanic-eg.com<br></br>
                <Link href="#" sx={{ wordBreak: "break-word" }} color="inherit">
                  Linkedin : linkedin.com/company/automechanic-eg/
                </Link>
              </Typography>
              <Box sx={{ mt: "30px" }}>
                <Typography color="white" sx={{ mb: "10px" }}>
                  Download Now
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
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
                      width: { xs: "100%", md: "45%" },
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
                        marginInline: "10px",
                      }}
                      alt="AppleIcon"
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        component={"p"}
                        sx={{ fontSize: "10px", fontWeight: "700" }}
                      >
                        {t("Download Now")}
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
                      width: { xs: "100%", md: "45%" },
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
                        marginInline: "10px",
                      }}
                      alt="AndroidIcon"
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        component={"p"}
                        sx={{ fontSize: "10px", fontWeight: "700" }}
                      >
                        {t("Download on the")}
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
        </Container>
      </Box>
    </>
  );
}
