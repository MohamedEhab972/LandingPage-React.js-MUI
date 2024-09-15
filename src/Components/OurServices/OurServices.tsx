import { Box, Container, Typography } from "@mui/material";
import car from "../../assets/car.svg";
import CarWash from "../../assets/123/CarWash.png";
import Diagnosis from "../../assets/123/Diagnosis.png";
import Electrical from "../../assets/123/Electrical.png";
import GeneralRepair from "../../assets/123/GeneralRepair.png";
import Mechanic from "../../assets/123/Mechanic.png";
import OilChange from "../../assets/123/OilChange.png";
import Suspension from "../../assets/123/Suspension.png";
import WheelAlign from "../../assets/123/WheelAlign.png";
import { useTranslation } from "react-i18next";

export default function OurServices() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Box
        sx={{
          position: "relative",
          paddingBlock: "20px",
          overflow: "hidden",
        }}
        component={"section"}
      >
        {i18n.language == "en" ? (
          <Box
            sx={{
              position: "absolute",
              bottom: "-120px",
              right: "-120px",
              zIndex: "-1",
            }}
          >
            <img
              src={car}
              style={{ opacity: "1", width: "406px", height: "406px" }}
              alt="logo3 image"
            />
          </Box>
        ) : (
          <Box
            sx={{
              position: "absolute",
              bottom: "-120px",
              left: "-120px",
              zIndex: "-1",
            }}
          >
            <img
              src={car}
              style={{ opacity: "1", width: "406px", height: "406px" }}
              alt="logo3 image"
            />
          </Box>
        )}

        <Container
          sx={{
            paddingBlock: { md: "20px" },
          }}
        >
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
            {t("Our Services")}
          </Typography>

          <Box
            className="row"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "28px",
              flexWrap: "wrap",
              marginTop: "40px",
            }}
          >
            <Box
              className="col"
              sx={{
                width: { md: "23%", xs: "45%" },
                height: "116px",
                border: "1px solid #E3E3E3",
                borderRadius: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  backgroundColor: "#fff",
                }}
              >
                <img src={Mechanic} alt="Mechanic logo" />
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    marginTop: "10px",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    letterSpacing: "-0.10000000149011612px",
                    textAlign: "center",
                  }}
                >
                  {t("Mechanic")}
                </Typography>
              </Box>
            </Box>
            <Box
              className="col"
              sx={{
                width: { md: "23%", xs: "45%" },
                height: "116px",
                border: "1px solid #E3E3E3",
                borderRadius: "16px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  width: { md: "23%", xs: "45%" },
                  height: "116px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  backgroundColor: "#fff",
                }}
              >
                <img src={Electrical} alt="Electrical logo" />
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    marginTop: "10px",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    letterSpacing: "-0.10000000149011612px",
                    textAlign: "center",
                  }}
                >
                  {t("Electrical")}
                </Typography>
              </Box>
            </Box>
            <Box
              className="col"
              sx={{
                width: { md: "23%", xs: "45%" },
                height: "116px",
                border: "1px solid #E3E3E3",
                borderRadius: "16px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  width: { md: "23%", xs: "45%" },
                  height: "116px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img src={WheelAlign} alt="WheelAlign logo" />
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    marginTop: "10px",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    letterSpacing: "-0.10000000149011612px",
                    textAlign: "center",
                  }}
                >
                  {t("Wheel Align")}
                </Typography>
              </Box>
            </Box>
            <Box
              className="col"
              sx={{
                width: { md: "23%", xs: "45%" },
                height: "116px",
                border: "1px solid #E3E3E3",
                borderRadius: "16px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  backgroundColor: "#fff",
                }}
              >
                <img src={CarWash} alt="CarWash logo" />
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    marginTop: "10px",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    letterSpacing: "-0.10000000149011612px",
                    textAlign: "center",
                  }}
                >
                  {t("Car Wash")}
                </Typography>
              </Box>
            </Box>
            <Box
              className="col"
              sx={{
                width: { md: "23%", xs: "45%" },
                height: "116px",
                border: "1px solid #E3E3E3",
                borderRadius: "16px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  backgroundColor: "#fff",
                }}
              >
                <img src={GeneralRepair} alt="GeneralRepair logo" />
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    marginTop: "10px",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    letterSpacing: "-0.10000000149011612px",
                    textAlign: "center",
                  }}
                >
                  {t("General Repair")}
                </Typography>
              </Box>
            </Box>
            <Box
              className="col"
              sx={{
                width: { md: "23%", xs: "45%" },
                height: "116px",
                border: "1px solid #E3E3E3",
                borderRadius: "16px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  backgroundColor: "#fff",
                }}
              >
                <img src={OilChange} alt="OilChange logo" />
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    marginTop: "10px",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    letterSpacing: "-0.10000000149011612px",
                    textAlign: "center",
                  }}
                >
                  {t("Oil Change")}
                </Typography>
              </Box>
            </Box>
            <Box
              className="col"
              sx={{
                width: { md: "23%", xs: "45%" },
                height: "116px",
                border: "1px solid #E3E3E3",
                borderRadius: "16px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img src={Diagnosis} alt="Diagnosis logo" />
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    marginTop: "10px",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    letterSpacing: "-0.10000000149011612px",
                    textAlign: "center",
                  }}
                >
                  {t("Diagnosis & reporting")}
                </Typography>
              </Box>
            </Box>
            <Box
              className="col"
              sx={{
                width: { md: "23%", xs: "45%" },
                height: "116px",
                border: "1px solid #E3E3E3",
                borderRadius: "16px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  backgroundColor: "#fff",
                }}
              >
                <img src={Suspension} alt="Suspension logo" />
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    marginTop: "10px",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    letterSpacing: "-0.10000000149011612px",
                    textAlign: "center",
                  }}
                >
                  {t("Suspension")}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
