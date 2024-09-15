import React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
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

export default function ContactUS() {
  const { t } = useTranslation();
  const classes = useStyles();
  function handelSubmet(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <>
      <Box
        sx={{
          position: "relative",
          paddingBlock: "20px",
          overflow: "hidden",
          backgroundColor: "#E8EDF5",
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
              gap: "40px",
              flexWrap: { xs: "wrap", md: "nowrap" },
            }}
          >
            <Box
              className="col"
              sx={{
                width: { xs: "100%", md: "40%" },
                textAlign: { xs: "center", md: "start" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: " Montserrat",
                  fontSize: "32px",
                  fontWeight: "700",
                  lineHeight: "56px",
                  letterSpacing: "-0.125rem",
                  color: "#213F57",
                }}
              >
                {t("Get in touch with us")}
              </Typography>
              <Typography
                sx={{
                  fontFamily: " Montserrat",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "32px",
                  marginTop: "20px",
                }}
              >
                {t(
                  "We know that sometimes a personal conversation is the best solution. If you need immediate support or have specific questions, don't hesitate to call or email us. Our dedicated team is available to discuss your concerns and help you further."
                )}
              </Typography>
            </Box>

            <Box
              className="col"
              sx={{
                width: { xs: "100%", md: "60%" },
                marginLeft: { md: "30px" },
              }}
            >
              <form
                onSubmit={(e) => handelSubmet(e)}
                noValidate
                style={{
                  display: "flex",
                  gap: "32px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <TextField
                  label={t("Full Name")}
                  variant="outlined"
                  type="text"
                  color="primary"
                  placeholder={t("Full Name")}
                  sx={{
                    width: { md: "47%", xs: "100%" },
                    backgroundColor: "white",
                    borderRadius: "8px",
                  }}
                />
                <TextField
                  label={t("Phone Number")}
                  variant="outlined"
                  type="number"
                  color="primary"
                  placeholder={t("Phone Number")}
                  sx={{
                    width: { md: "47%", xs: "100%" },
                    backgroundColor: "white",
                    borderRadius: "8px",
                  }}
                />
                <TextField
                  label={t("Email")}
                  variant="outlined"
                  type="email"
                  color="primary"
                  placeholder={t("Email")}
                  sx={{
                    direction: "ltr",
                    width: { md: "47%", xs: "100%" },
                    backgroundColor: "white",
                    borderRadius: "8px",
                  }}
                />
                <TextField
                  label={t("Company")}
                  variant="outlined"
                  type="text"
                  color="primary"
                  placeholder={t("Company")}
                  sx={{
                    width: { md: "47%", xs: "100%" },
                    backgroundColor: "white",
                    borderRadius: "8px",
                  }}
                />
                <TextField
                  label={t("Message")}
                  variant="outlined"
                  type="text"
                  color="primary"
                  placeholder={t("Message")}
                  fullWidth
                  multiline
                  rows={4}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                  }}
                />
                <Button
                  className={classes.btn}
                  type="submit"
                  variant="contained"
                  sx={{
                    marginInlineStart: { md: "auto" },
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
                    {t("Submit")}
                  </Typography>
                </Button>
              </form>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
