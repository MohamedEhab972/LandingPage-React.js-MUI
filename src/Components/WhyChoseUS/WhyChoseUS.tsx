import { Box, Container, Typography } from "@mui/material";
import image from "../../assets/1c5e5b4df73c515d090e5eec31212e61.png";
import CustomerSupport from "../../assets/CustomerSupport.svg";
import EasyAndFriendly from "../../assets/EasyAndFriendly.svg";
import Tranceprancy from "../../assets/Tranceprancy.svg";
import { useTranslation } from "react-i18next";

export default function WhyChoseUS() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          paddingBottom: "20px",
          overflow: "hidden",
        }}
        component={"section"}
      >
        <Container
          sx={{
            paddingTop: "120px",
            paddingBottom: "30px",
          }}
        >
          {i18n.language == "en" ? (
            <Box sx={{ position: "absolute", top: "0", left: "0" }}>
              <img
                src={image}
                style={{
                  opacity: "0.1",
                  width: "100%",
                  height: "406px",
                }}
                alt="logo2 image"
              />
            </Box>
          ) : (
            <Box
              sx={{
                position: "absolute",
                top: "0",
                right: "0",
                transform: "scaleX(-1)",
              }}
            >
              <img
                src={image}
                style={{ opacity: "0.1", width: "406px", height: "406px" }}
                alt="logo2 image"
              />
            </Box>
          )}

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
                {t("Why Choose us")}
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
                {t("We are an")}{" "}
                <Typography
                  variant="inherit"
                  sx={{ color: "#3BDBC0" }}
                  component={"span"}
                >
                  {t("Egyptian")}
                </Typography>{" "}
                {t("company")} <br></br>{" "}
                {t("that was born out of the Need to find easy")}
              </Typography>
              <Typography
                sx={{
                  marginBlock: "20px",
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
                  "in their locality, with a list of prices and services, and locations available at the touch of a button"
                )}{" "}
              </Typography>
            </Box>

            <Box
              className="row"
              sx={{
                display: "flex",
                gap: "12px",
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
                      src={EasyAndFriendly}
                      style={{ width: "200px", height: "200px" }}
                      alt="EasyAndFriendly Image"
                    />
                  </Box>

                  <Typography
                    sx={{
                      marginBottom: "10px",
                      fontFamily: " Montserrat",
                      fontSize: "32px",
                      fontWeight: "600",
                      lineHeight: "40px",
                      letterSpacing: "-0.10000000149011612px",
                      textAlign: "center",
                      color: "#6E3AD4",
                    }}
                  >
                    {t("Easy & Friendly")}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "400",
                      lineHeight: "40px",
                      letterSpacing: "-0.10000000149011612px",
                      textAlign: "center",
                      color: "#04113A",
                    }}
                  >
                    {t(
                      "The app was perfectly designed and developed based on an extensive research"
                    )}
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
                      src={Tranceprancy}
                      style={{ width: "200px", height: "200px" }}
                      alt="Tranceprancy Image"
                    />
                  </Box>

                  <Typography
                    sx={{
                      marginBottom: "10px",
                      fontFamily: " Montserrat",
                      fontSize: "32px",
                      fontWeight: "600",
                      lineHeight: "40px",
                      letterSpacing: "-0.10000000149011612px",
                      textAlign: "center",
                      color: "#6E3AD4",
                    }}
                  >
                    {t("Tranceprancy")}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "400",
                      lineHeight: "40px",
                      letterSpacing: "-0.10000000149011612px",
                      textAlign: "center",
                      color: "#04113A",
                    }}
                  >
                    {t(
                      "Transparent listing of Quality, Prices and Service delivery time"
                    )}
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
                      src={CustomerSupport}
                      style={{ width: "200px", height: "200px" }}
                      alt="CustomerSupport Image"
                    />
                  </Box>

                  <Typography
                    sx={{
                      marginBottom: "10px",
                      fontFamily: " Montserrat",
                      fontSize: "32px",
                      fontWeight: "600",
                      lineHeight: "40px",
                      letterSpacing: "-0.10000000149011612px",
                      textAlign: "center",
                      color: "#6E3AD4",
                    }}
                  >
                    {t("Customer Support")}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "400",
                      lineHeight: "40px",
                      letterSpacing: "-0.10000000149011612px",
                      textAlign: "center",
                      color: "#04113A",
                    }}
                  >
                    {t(
                      "We are always available to guide and support you at anytime"
                    )}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
