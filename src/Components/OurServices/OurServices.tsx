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

export default function OurServices() {
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
        <Container
          sx={{
            paddingBlock: "20px",
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
            Our Services
          </Typography>

          <Box
            className="row"
            sx={{
              display: "flex",
              gap: "46px",
              flexWrap: "wrap",
              marginTop: "40px",
            }}
          >
            <Box
              className="col"
              sx={{
                width: "22%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  border: "1px solid #E3E3E3",
                  width: "240px",
                  height: "116px",
                  borderRadius: "16px",
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
                  Mechanic
                </Typography>
              </Box>
            </Box>
            <Box
              className="col"
              sx={{
                width: "22%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  border: "1px solid #E3E3E3",
                  width: "240px",
                  height: "116px",
                  borderRadius: "16px",
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
                  Electrical
                </Typography>
              </Box>
            </Box>
            <Box
              className="col"
              sx={{
                width: "22%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  border: "1px solid #E3E3E3",
                  width: "240px",
                  height: "116px",
                  borderRadius: "16px",
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
                  Wheel Align
                </Typography>
              </Box>
            </Box>
            <Box
              className="col"
              sx={{
                width: "22%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  border: "1px solid #E3E3E3",
                  width: "240px",
                  height: "116px",
                  borderRadius: "16px",
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
                  Car Wash
                </Typography>
              </Box>
            </Box>
            <Box
              className="col"
              sx={{
                width: "22%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  border: "1px solid #E3E3E3",
                  width: "240px",
                  height: "116px",
                  borderRadius: "16px",
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
                  General Repair
                </Typography>
              </Box>
            </Box>
            <Box
              className="col"
              sx={{
                width: "22%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  border: "1px solid #E3E3E3",
                  width: "240px",
                  height: "116px",
                  borderRadius: "16px",
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
                  Oil Change
                </Typography>
              </Box>
            </Box>
            <Box
              className="col"
              sx={{
                width: "22%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  border: "1px solid #E3E3E3",
                  width: "240px",
                  height: "116px",
                  borderRadius: "16px",
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
                  Diagnosis & reporting
                </Typography>
              </Box>
            </Box>
            <Box
              className="col"
              sx={{
                width: "22%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  border: "1px solid #E3E3E3",
                  width: "240px",
                  height: "116px",
                  borderRadius: "16px",
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
                  Suspension
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
